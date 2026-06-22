# DreamSetu Folder Architecture

## Purpose

This document defines the folder structure for the DreamSetu project.

The architecture is designed to be:

- Modular
- Scalable
- Easy to maintain
- Beginner-friendly
- Industry standard

---

# Project Structure

DreamSetu/

├── frontend/

├── backend/

├── database/

├── ai/

├── docs/

├── assets/

├── .gitignore

├── README.md

└── docker-compose.yml (Future)

---

# Frontend

Technology

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

Structure

frontend/

├── public/

├── src/

│   ├── assets/

│   ├── components/

│   │      ├── common/

│   │      ├── dashboard/

│   │      ├── pod/

│   │      ├── project/

│   │      ├── chat/

│   │      └── ui/

│   ├── pages/

│   │      ├── Landing/

│   │      ├── Login/

│   │      ├── Signup/

│   │      ├── Profile/

│   │      ├── Assessment/

│   │      ├── Dashboard/

│   │      ├── SetuPod/

│   │      ├── Project/

│   │      ├── Progress/

│   │      └── NotFound/

│   ├── layouts/

│   ├── routes/

│   ├── hooks/

│   ├── context/

│   ├── services/

│   ├── utils/

│   ├── constants/

│   ├── types/

│   ├── styles/

│   ├── App.tsx

│   └── main.tsx

---

# Backend

Technology

- Node.js
- Express.js
- JWT
- Supabase

Structure

backend/

├── src/

│   ├── config/

│   ├── controllers/

│   ├── routes/

│   ├── middleware/

│   ├── services/

│   ├── models/

│   ├── validators/

│   ├── utils/

│   ├── helpers/

│   ├── constants/

│   ├── database/

│   ├── app.js

│   └── server.js

---

# Controllers

controllers/

- auth.controller.js
- user.controller.js
- assessment.controller.js
- pod.controller.js
- project.controller.js
- task.controller.js
- chat.controller.js
- progress.controller.js
- achievement.controller.js

---

# Routes

routes/

- auth.routes.js
- user.routes.js
- assessment.routes.js
- pod.routes.js
- project.routes.js
- task.routes.js
- chat.routes.js
- progress.routes.js

---

# Services

services/

Business Logic

- ai.service.js
- pod.service.js
- project.service.js
- progress.service.js
- notification.service.js

---

# Database

database/

├── migrations/

├── schema/

├── seed/

└── README.md

---

# AI

ai/

├── prompts/

├── workflow/

├── recommendations/

├── resources/

└── README.md

Purpose

Store AI prompts and AI-related workflows separately from backend logic.

---

# Assets

assets/

├── images/

├── icons/

├── logos/

├── illustrations/

└── screenshots/

---

# Documentation

docs/

├── 00-Product-Roadmap.md
├── 01-Problem-Statement.md
├── 02-Vision.md
├── 03-User-Personas.md
├── 04-MVP-Features.md
├── 05-User-Flow.md
├── 06-System-Architecture.md
├── 07-UI-Wireframes.md
├── 08-Database-Schema.md
├── 09-API-Design.md
├── 10-AI-Workflow.md
├── 11-Database-ERD.md
├── 12-Folder-Architecture.md
├── Competitive-Analysis.md
└── MY_WHY.md

---

# Environment Variables

Frontend

.env

Example

VITE_API_URL=

VITE_SUPABASE_URL=

VITE_SUPABASE_ANON_KEY=

---

Backend

.env

Example

PORT=

JWT_SECRET=

SUPABASE_URL=

SUPABASE_SERVICE_ROLE_KEY=

OPENAI_API_KEY=

---

# Git Branch Strategy

main

Production Ready Code

develop

Development Branch

feature/

Individual Features

Example

feature/auth

feature/dashboard

feature/pod-workspace

feature/ai-mentor

feature/project-board

---

# Development Workflow

Feature Branch

↓

Code

↓

Commit

↓

Push

↓

Pull Request

↓

Code Review

↓

Merge into develop

↓

Merge into main

---

# Coding Standards

Frontend

- Functional Components
- TypeScript
- Reusable Components
- Clean Folder Structure

Backend

- REST API
- Controller → Service → Database pattern
- Input Validation
- Proper Error Handling
- JWT Authentication

---

# Why This Architecture?

The DreamSetu architecture is designed to support both the hackathon MVP and future production scaling.

Benefits

- Easy to understand
- Easy to maintain
- Team-friendly
- Scalable
- Modular
- Industry standard

As DreamSetu grows, new modules can be added without changing the existing structure.