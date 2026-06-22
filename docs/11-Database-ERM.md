# DreamSetu Database ER Diagram

## Purpose

This document defines the relationships between all database entities used in DreamSetu.

The ERD helps developers understand how data flows across the platform and ensures a scalable database design.

---

# Database Entities

DreamSetu consists of the following core entities:

- Users
- Skill Assessments
- Setu Pods
- Pod Members
- Projects
- Tasks
- Task Submissions
- Progress Reports
- Messages
- Achievements
- Notifications

---

# High-Level ER Diagram

                    Users
                      │
         ┌────────────┼────────────┐
         │            │            │
         ▼            ▼            ▼
Skill Assessments  Pod Members  Progress Reports
                        │
                        ▼
                  Setu Pods
                        │
            ┌───────────┼───────────┐
            ▼                       ▼
        Projects                Messages
            │
            ▼
          Tasks
            │
            ▼
     Task Submissions
            │
            ▼
      Achievements

---

# Relationships

## Users → Skill Assessments

Relationship

One User → Many Skill Assessments

Reason

Students can retake assessments over time.

---

## Users → Pod Members

Relationship

One User → Many Pod Memberships

Reason

Students may join different Setu Pods in different learning seasons.

---

## Setu Pods → Pod Members

Relationship

One Setu Pod → Many Members

Typical MVP

- 1 Beginner
- 1 Intermediate
- 1 Expert

---

## Setu Pods → Projects

Relationship

One Pod → One Active Project

Future

One Pod → Many Projects

---

## Projects → Tasks

Relationship

One Project → Many Tasks

Example

Portfolio Website

↓

HTML

↓

CSS

↓

JavaScript

↓

Deployment

---

## Tasks → Task Submissions

Relationship

One Task → One Submission

Future

Multiple submissions for revisions.

---

## Users → Task Submissions

Relationship

One User → Many Submissions

---

## Users → Messages

Relationship

One User → Many Messages

---

## Setu Pods → Messages

Relationship

One Pod → Many Messages

---

## Users → Progress Reports

Relationship

One User → Many Reports

Reason

Weekly AI reports.

---

## Users → Achievements

Relationship

One User → Many Achievements

Example

🏅 First Project

🏅 Mentor

🏅 Team Player

---

## Users → Notifications

Relationship

One User → Many Notifications

---

# Cardinality Summary

Users

1 → N Skill Assessments

1 → N Pod Memberships

1 → N Task Submissions

1 → N Messages

1 → N Progress Reports

1 → N Achievements

1 → N Notifications

---

Setu Pods

1 → N Members

1 → N Messages

1 → 1 Active Project

---

Projects

1 → N Tasks

---

Tasks

1 → 1 Task Submission (MVP)

---

# Foreign Keys

Skill Assessments

user_id → Users.id

---

Pod Members

user_id → Users.id

pod_id → SetuPods.id

---

Projects

pod_id → SetuPods.id

---

Tasks

project_id → Projects.id

assigned_to → Users.id

---

Task Submissions

task_id → Tasks.id

submitted_by → Users.id

---

Messages

pod_id → SetuPods.id

sender_id → Users.id

---

Progress Reports

user_id → Users.id

---

Achievements

user_id → Users.id

---

Notifications

user_id → Users.id

---

# MVP Database Flow

User Registers

↓

Profile Created

↓

Skill Assessment

↓

AI Determines Skill Level

↓

AI Creates Setu Pod

↓

Project Assigned

↓

Tasks Created

↓

Task Submission

↓

Expert Review

↓

Progress Report

↓

Achievement Unlocked

---

# Future Expansion

Additional tables can be added without affecting the existing design.

Future Modules

- Learning Seasons
- Career Roadmaps
- Resume Builder
- Mock Interviews
- Hackathons
- Company Challenges
- Community Forums
- AI Recommendations

---

# Why This ER Design?

The ERD is modular and scalable.

It supports:

- AI-powered team formation
- Project-based collaboration
- Real-time communication
- Progress tracking
- Future AI features

This design allows DreamSetu to evolve from a hackathon MVP into a production-ready collaborative learning ecosystem.