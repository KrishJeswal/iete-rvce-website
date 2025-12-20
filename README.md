# IETE RVCE Official Website

This repository contains the complete codebase for the official website of the Institution of Electronics and Telecommunication Engineers (IETE) – RVCE Chapter. The project is maintained as a single repository that includes the existing frontend, backend serverless APIs, and database schema/configuration to ensure long-term maintainability and smooth handover between committees.

---

## Repository Overview

This project follows a monorepo structure with a clear separation of concerns:
- The frontend is a static website copied as-is from the original `IETE-rvce-website-frontend` repository.
- The backend is implemented using serverless functions.
- The database schema and security rules are version-controlled within this repository.

---

## Architecture

- Frontend: A static HTML, CSS, and JavaScript website for simplicity, speed, and ease of contribution.
- Backend: Serverless APIs implemented using Netlify Functions to handle form submissions, data fetching, and admin operations.
- Database: Supabase (PostgreSQL) is used as the primary database with SQL schema and Row Level Security rules committed to the repository.

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### Backend
- Netlify Functions
- Node.js

### Database
- Supabase (PostgreSQL)
- Supabase Auth (admin access)
- Supabase Storage (optional, for images and media)

### Deployment
- Netlify (static hosting and serverless functions)