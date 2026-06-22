# DreamSetu System Architecture

# Overview

DreamSetu is an AI-powered collaborative skill development ecosystem where students are matched into AI-generated Setu Pods to learn through real-world projects.

The platform consists of five major components:

- Frontend
- Backend
- Database
- AI Engine
- Real-Time Collaboration

---

# High-Level Architecture

                    User
                     │
                     ▼
          React Frontend (Web App)
                     │
                     ▼
        Express.js Backend API Server
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
 Supabase DB     AI Service     Realtime Chat
      │              │              │
      └──────────────┼──────────────┘
                     ▼
             Progress Analytics

---

# Technology Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

Purpose:

- User Interface
- Dashboard
- Team Workspace
- Learning Journey

---

## Backend

- Node.js
- Express.js

Responsibilities:

- Authentication
- API Development
- Pod Creation
- Project Management
- User Management
- Progress Tracking

---

## Database

Supabase (PostgreSQL)

Stores:

- Users
- Skill Assessments
- Setu Pods
- Projects
- Tasks
- Contributions
- Progress Reports

---

## AI Engine

Responsibilities:

- Skill Assessment Analysis
- Setu Pod Formation
- Task Distribution
- Resource Recommendation
- Weekly Feedback
- Growth Analysis

Future:

- Personalized AI Mentor
- Career Coach

---

## Authentication

Users can sign in using:

- Google
- Email
- College Email (Future)

Roles:

- Beginner
- Intermediate
- Expert
- Admin

---

# Core Modules

## Module 1

User Management

Features

- Registration
- Login
- Profile
- Skills
- Interests

---

## Module 2

AI Skill Assessment

Functions

- Skill Test
- Experience Analysis
- User Classification

Output

- Beginner
- Intermediate
- Expert

---

## Module 3

Setu Pod Management ⭐

Responsibilities

- Create Pods
- Match Students
- Assign Roles
- Manage Teams

This is DreamSetu's core innovation.

---

## Module 4

Project Management

Features

- Create Projects
- Assign Tasks
- Track Completion
- Project Status

---

## Module 5

Collaboration

Features

- Team Chat
- Shared Resources
- Discussion
- Announcements

---

## Module 6

AI Mentor

Provides

- Hints
- Resources
- Explanations
- Learning Suggestions

AI supports learning instead of replacing it.

---

## Module 7

Progress Tracking

Tracks

- Technical Skills
- Communication
- Leadership
- Collaboration
- Confidence
- Contribution Score

---

# Database Tables

Users

↓

Skill Assessments

↓

Setu Pods

↓

Pod Members

↓

Projects

↓

Tasks

↓

Task Submissions

↓

Reviews

↓

Progress Reports

↓

Achievements

---

# API Flow

Student Logs In

↓

Backend verifies user

↓

Skill Assessment

↓

AI Analysis

↓

Create Setu Pod

↓

Assign Project

↓

Assign Tasks

↓

Student Starts Learning

↓

Progress Updates

↓

AI Generates Report

---

# Security

- JWT Authentication
- Role-Based Access
- Secure APIs
- Input Validation
- Database Security

---

# Future Architecture

- Mobile App
- AI Voice Mentor
- Video Collaboration
- College Communities
- Hackathon Mode
- Industry Mentors

---

# Why This Architecture?

The architecture is modular.

Each module can be developed independently and scaled as DreamSetu grows.

This allows the platform to support thousands of students while maintaining a collaborative and personalized learning experience.