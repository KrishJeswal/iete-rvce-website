# IETE RVCE Official Website

This repository contains the source code for the **IETE RVCE Student Chapter Website**, built using **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**.

This is the initial project setup with a clean folder structure, placeholder components, and ready-to-build configuration.

---

## 🛠 Tech Stack – iete-rvce.org

**Framework**
- Next.js 14 (App Router)
- Static export using `next build && next export`

**Language**
- TypeScript (strict)

**Styling**
- Tailwind CSS
- `clsx` + `tailwind-merge` for className composition

**UI Components**
- shadcn/ui for base UI components
- Custom shared components in `components/common`

**Animations**
- Framer Motion

**Forms & Validation**
- React Hook Form
- Zod

**Data**
- Static JSON and MDX content stored in `/src/data` and `/src/content`

**Backend**
- Node.js + Express REST API
- Hosted separately from frontend
- Handles:
  - Contact form submissions
  - Event registrations
  - Admin-managed data input

**Database**
- MongoDB Atlas
- Prisma ORM

**Images**
- Next.js `next/image` with `unoptimized: true`
- All assets stored in `/public`

**Package Manager**
- npm

**Deployment**
- Frontend: GitHub Pages (`iete-rvce.github.io`)
- Static output generated in `/out`
- Deployed via GitHub Actions
- Backend: Hosted externally
- Custom domain configured using `CNAME` as `iete-rvce.org`


