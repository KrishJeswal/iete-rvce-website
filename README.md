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

## Project Structure
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

## Maintainers

IETE-RVCE Website Development Team