# DreamSetu Database Schema

## Purpose

The DreamSetu database stores all information related to users, AI Skill Assessments, Setu Pods, projects, collaboration, progress, and achievements.

The database is designed using PostgreSQL (Supabase).

---

# Database Overview

Main Tables

1. Users
2. Skill Assessments
3. Setu Pods
4. Pod Members
5. Projects
6. Tasks
7. Task Submissions
8. Messages
9. Resources
10. Progress Reports
11. Achievements
12. Notifications

---

# Table 1 — Users

Purpose

Stores student profile information.

Fields

- id (UUID) [Primary Key]
- full_name
- email
- password (Encrypted)
- profile_image
- college
- branch
- year
- skill_level
- preferred_domain
- preferred_language
- weekly_availability
- bio
- contribution_score
- current_level
- created_at
- updated_at

Relationship

One User can belong to many Setu Pods.

---

# Table 2 — Skill Assessments

Purpose

Stores AI assessment results.

Fields

- id
- user_id (FK → Users)
- technical_score
- aptitude_score
- communication_score
- project_score
- final_skill_level
- ai_feedback
- created_at

Relationship

One User → Multiple Assessments

---

# Table 3 — Setu Pods

Purpose

Stores collaborative learning groups.

Fields

- id
- pod_name
- project_id
- domain
- status
- created_by
- created_at

Status

- Active
- Completed
- Archived

---

# Table 4 — Pod Members

Purpose

Maps users to Setu Pods.

Fields

- id
- pod_id
- user_id
- role

Roles

- Beginner
- Intermediate
- Expert

Relationship

Many Users ↔ Many Pods

---

# Table 5 — Projects

Purpose

Stores collaborative projects.

Fields

- id
- title
- description
- difficulty
- domain
- estimated_duration
- status
- created_at

Status

- Upcoming
- Active
- Completed

---

# Table 6 — Tasks

Purpose

Stores project tasks.

Fields

- id
- project_id
- assigned_to
- title
- description
- difficulty
- deadline
- status

Status

- Pending
- In Progress
- Completed

---

# Table 7 — Task Submissions

Purpose

Stores completed task submissions.

Fields

- id
- task_id
- submitted_by
- github_link
- demo_link
- remarks
- reviewed_by
- review_status
- submitted_at

Review Status

- Pending
- Approved
- Needs Changes

---

# Table 8 — Messages

Purpose

Stores team chat messages.

Fields

- id
- pod_id
- sender_id
- message
- message_type
- created_at

Message Types

- Text
- Image
- File
- AI Suggestion

---

# Table 9 — Resources

Purpose

Stores learning resources shared in Setu Pods.

Fields

- id
- pod_id
- title
- url
- shared_by
- resource_type

Resource Types

- Video
- Article
- GitHub
- Documentation
- PDF

---

# Table 10 — Progress Reports

Purpose

Tracks student growth.

Fields

- id
- user_id
- completed_projects
- completed_tasks
- communication_score
- leadership_score
- collaboration_score
- confidence_score
- ai_feedback
- updated_at

---

# Table 11 — Achievements

Purpose

Stores badges and milestones.

Fields

- id
- user_id
- badge_name
- description
- earned_at

Examples

- First Project
- Team Player
- Mentor
- Problem Solver
- Community Leader

---

# Table 12 — Notifications

Purpose

Stores notifications.

Fields

- id
- user_id
- title
- description
- is_read
- created_at

Examples

- New Task Assigned
- Pod Invitation
- Achievement Unlocked
- Project Deadline

---

# Database Relationships

Users

↓

Skill Assessments

↓

Pod Members

↓

Setu Pods

↓

Projects

↓

Tasks

↓

Task Submissions

↓

Progress Reports

↓

Achievements

---

# Future Tables

- AI Recommendations
- Career Roadmaps
- Mock Interviews
- Resume Builder
- Company Challenges
- Hackathons
- Learning Seasons
- Community Forums

---

# Why This Database Design?

The schema is modular and scalable.

It allows DreamSetu to support:

- AI-powered skill assessment
- Intelligent Setu Pod creation
- Project-based collaboration
- Real-time communication
- Progress tracking
- Gamification
- Future AI features

This design ensures DreamSetu can grow from a hackathon MVP into a production-ready collaborative learning ecosystem.


🏗️ Improvement for MVP

For the hackathon MVP, don't build all 12 tables immediately.

Start with these 8 essential tables:

Phase 1 (Must Have)
✅ Users
✅ Skill Assessments
✅ Setu Pods
✅ Pod Members
✅ Projects
✅ Tasks
✅ Task Submissions
✅ Progress Reports
Phase 2
Messages
Resources
Notifications
Achievements

This keeps the MVP focused and achievable.