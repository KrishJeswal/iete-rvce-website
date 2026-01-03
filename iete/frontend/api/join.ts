import { sql } from '@vercel/postgres';
import { z } from 'zod';

// NOTE: This runs as a Vercel Serverless Function at /api/join
// It persists Join form submissions into Vercel Postgres.

const JoinSchema = z.object({
  fullName: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(5).max(40),
  usn: z.string().min(1).max(40),
  department: z.string().min(1).max(40),
  year: z.union([z.string(), z.number()]),
  membershipType: z.string().min(1).max(20),
});

export default async function handler(req: any, res: any) {
  // Basic CORS (useful if the form is ever embedded elsewhere)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const parsed = JoinSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: 'Invalid form data. Please check your inputs and try again.',
      });
    }

    const body = parsed.data;
    const yearNum = Number(body.year);
    if (!Number.isFinite(yearNum) || yearNum < 1 || yearNum > 6) {
      return res.status(400).json({ error: 'Invalid year.' });
    }

    const userAgent = String(req.headers['user-agent'] || '').slice(0, 400);
    const ip = String(
      req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || ''
    ).slice(0, 100);

    // Insert into table. Create it once from Vercel Postgres SQL editor.
    await sql`
      INSERT INTO join_applications (
        full_name, email, phone, usn, department, year, membership_type, user_agent, ip
      ) VALUES (
        ${body.fullName.trim()},
        ${body.email.trim().toLowerCase()},
        ${body.phone.trim()},
        ${body.usn.trim().toUpperCase()},
        ${body.department},
        ${yearNum},
        ${body.membershipType},
        ${userAgent},
        ${ip}
      )
    `;

    return res.status(200).json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Join submission error:', err);
    return res.status(500).json({ error: 'Server error. Please try again in a bit.' });
  }
}
