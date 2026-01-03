# IETE-RVCE Website

Official website for IETE-RVCE, developed and maintained by the IETE-RVCE technical team.

The site is built with a modern frontend stack and includes a Join Application system that securely stores applicant data using a serverless backend.

## Tech Stack

Frontend: React, TypeScript, Vite

Styling & Animations: Tailwind CSS, Framer Motion

Backend: Vercel Serverless Functions

Database: Vercel Postgres

Deployment: Vercel

## Key Features

Responsive, animated UI

Join IETE application form

Serverless API for form submissions

Secure database storage for applicant data

Join Application Flow

User submits the Join form

Data is sent to /api/join

Serverless function validates and stores data in Postgres

Success confirmation is shown to the user

Applicant data is not publicly accessible.

### Project Structure
frontend/
  api/
    join.ts
  src/
    pages/
      Join.tsx
  public/
  package.json


Note: Vercel Root Directory is set to frontend.

Local Development
cd frontend
npm install
npm run dev

### Deployment (Vercel)

Import the repo into Vercel

Set Root Directory to frontend

Deploy

Create and attach a Vercel Postgres database

Run the required table creation SQL

Redeploy once

### Viewing Applications

Applications are stored in Vercel Postgres.

SELECT * 
FROM join_applications 
ORDER BY created_at DESC;


Data can be exported as CSV for internal use.

Notes

Only authorized project members can access application data

Share applicant data via CSV exports, not direct DB access

node_modules and large files are ignored

### Maintainers

IETE-RVCE Website Development Team