import { sql } from "@vercel/postgres";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    const {
      full_name,
      email,
      phone,
      usn,
      department,
      year,
      membership_type,
    } = body;

    // Basic validation
    const required = { full_name, email, phone, usn, department, year, membership_type };
    for (const [k, v] of Object.entries(required)) {
      if (v === undefined || v === null || String(v).trim() === "") {
        return res.status(400).json({ ok: false, error: `Missing field: ${k}` });
      }
    }

    const userAgent = req.headers["user-agent"] || null;
    const ipHeader = req.headers["x-forwarded-for"];
    const ip =
      (Array.isArray(ipHeader) ? ipHeader[0] : ipHeader)?.split(",")[0]?.trim() || null;

    await sql`
      INSERT INTO join_applications
      (full_name, email, phone, usn, department, year, membership_type, user_agent, ip)
      VALUES
      (${full_name}, ${email}, ${phone}, ${usn}, ${department}, ${Number(year)}, ${membership_type}, ${userAgent}, ${ip})
    `;

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
