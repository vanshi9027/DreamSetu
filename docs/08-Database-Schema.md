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




# DreamSetu Database Schema (Buildathon MVP)

## Purpose

DreamSetu is an **AI Career Accelerator** that helps students become job-ready through:

- 🤖 AI Skill Assessment
- 📊 Skill Gap Analysis
- 🗺 Personalized Learning Roadmap
- 👥 AI Setu Pods (Collaborative Learning)
- 📄 AI Resume Analysis
- 🎤 AI Mock Interviews
- 💼 Internship Recommendations
- 📈 Progress Tracking

Unlike traditional career platforms, DreamSetu combines **AI-powered career guidance** with **collaborative project-based learning**.

---

# Database Technology

For the MVP, DreamSetu uses:

- **MongoDB**
- **Mongoose**
- **Express.js**

The database design is modular so it can later be migrated to **PostgreSQL (Supabase)** without major architectural changes.

---

# MVP Collections

## Phase 1 (Must Have)

1. Users
2. Skill Assessments
3. Learning Roadmaps
4. Setu Pods
5. Pod Members
6. Projects
7. Tasks
8. Progress Reports

---

## Phase 2

9. Resume Analysis
10. Mock Interviews
11. Internship Recommendations
12. Notifications

---

# Collection 1 — Users ⭐

## Purpose

Stores authentication and complete student profile.

### Fields

| Field | Description |
|---------|-------------|
| _id | User ID |
| name | Full Name |
| email | Login Email |
| password | Encrypted Password |
| profileImage | Profile Photo |
| college | College Name |
| degree | Degree |
| branch | Branch |
| year | Current Year |
| skills | Array of Skills |
| interests | Preferred Domains |
| careerGoal | Internship / Placement / Startup |
| experienceLevel | Beginner / Intermediate / Expert |
| preferredLanguage | English / Hindi |
| availability | Weekly Availability |
| github | GitHub Profile |
| linkedin | LinkedIn Profile |
| profileCompleted | Profile Completion Status |
| createdAt | Created Time |
| updatedAt | Updated Time |

### Used By

- Authentication
- AI Assessment
- Learning Roadmap
- AI Setu Pods
- Internship Recommendation

---

# Collection 2 — Skill Assessments

## Purpose

Stores AI-generated skill assessment reports.

### Fields

| Field | Description |
|---------|-------------|
| _id | Assessment ID |
| userId | User Reference |
| technicalScore | Technical Score |
| aptitudeScore | Aptitude Score |
| communicationScore | Communication Score |
| problemSolvingScore | DSA Score |
| overallScore | Final Score |
| skillLevel | Beginner / Intermediate / Expert |
| strengths | Strong Skills |
| weaknesses | Weak Skills |
| aiFeedback | AI Suggestions |
| createdAt | Assessment Date |

### Used By

- Skill Gap Analysis
- Learning Roadmap
- Setu Pods

---

# Collection 3 — Learning Roadmaps

## Purpose

Stores personalized AI learning plans.

### Fields

| Field | Description |
|---------|-------------|
| _id | Roadmap ID |
| userId | User Reference |
| careerGoal | Target Goal |
| currentLevel | Current Skill Level |
| targetRole | Backend / Frontend / AI etc. |
| roadmapSteps | Weekly Learning Plan |
| estimatedDuration | Duration |
| status | Active / Completed |
| createdAt | Generated Date |

---

# Collection 4 — Setu Pods ⭐

## Purpose

AI-generated collaborative learning groups.

### Fields

| Field | Description |
|---------|-------------|
| _id | Pod ID |
| podName | Pod Name |
| domain | Development Domain |
| projectId | Linked Project |
| mentorId | Mentor User |
| status | Active / Completed |
| createdAt | Created Time |

---

# Collection 5 — Pod Members

## Purpose

Maps students to AI-generated Setu Pods.

### Fields

| Field | Description |
|---------|-------------|
| _id | Member ID |
| podId | Pod Reference |
| userId | User Reference |
| role | Beginner / Intermediate / Expert |
| joinedAt | Joined Date |

---

# Collection 6 — Projects

## Purpose

Stores collaborative real-world projects.

### Fields

| Field | Description |
|---------|-------------|
| _id | Project ID |
| title | Project Name |
| description | Description |
| domain | Web / AI / Mobile |
| difficulty | Easy / Medium / Hard |
| estimatedDuration | Timeline |
| status | Upcoming / Active / Completed |
| createdAt | Created Time |

---

# Collection 7 — Tasks

## Purpose

Stores AI-distributed project tasks.

### Fields

| Field | Description |
|---------|-------------|
| _id | Task ID |
| projectId | Linked Project |
| assignedTo | Assigned User |
| title | Task Title |
| description | Task Details |
| difficulty | Easy / Medium / Hard |
| deadline | Due Date |
| status | Pending / In Progress / Completed |

---

# Collection 8 — Progress Reports

## Purpose

Tracks student growth throughout the platform.

### Fields

| Field | Description |
|---------|-------------|
| _id | Progress ID |
| userId | User Reference |
| completedProjects | Total Projects |
| completedTasks | Total Tasks |
| skillScore | Technical Growth |
| communicationScore | Communication |
| collaborationScore | Collaboration |
| leadershipScore | Leadership |
| resumeScore | ATS Score |
| interviewScore | Interview Score |
| updatedAt | Updated Time |

---

# Collection 9 — Resume Analysis

## Purpose

Stores AI-powered ATS resume analysis.

### Fields

| Field | Description |
|---------|-------------|
| _id | Analysis ID |
| userId | User Reference |
| resumeUrl | Uploaded Resume |
| atsScore | ATS Score |
| missingKeywords | Missing Skills |
| strengths | Resume Strengths |
| suggestions | AI Suggestions |
| analyzedAt | Analysis Date |

---

# Collection 10 — Mock Interviews

## Purpose

Stores AI mock interview sessions.

### Fields

| Field | Description |
|---------|-------------|
| _id | Interview ID |
| userId | User Reference |
| role | Interview Role |
| questions | Questions Asked |
| feedback | AI Feedback |
| technicalScore | Technical Score |
| communicationScore | Communication Score |
| confidenceScore | Confidence Score |
| completedAt | Completion Time |

---

# Collection 11 — Internship Recommendations

## Purpose

Stores AI-generated internship recommendations.

### Fields

| Field | Description |
|---------|-------------|
| _id | Recommendation ID |
| userId | User Reference |
| recommendedRoles | Suggested Roles |
| companies | Suggested Companies |
| requiredSkills | Missing Skills |
| generatedAt | Generated Time |

---

# Collection 12 — Notifications

## Purpose

Stores platform notifications.

### Fields

| Field | Description |
|---------|-------------|
| _id | Notification ID |
| userId | User Reference |
| title | Notification Title |
| message | Notification Description |
| type | Assessment / Pod / Project |
| isRead | Read Status |
| createdAt | Created Time |

---

# Database Relationships

```text
Users
│
├── Skill Assessments
│
├── Learning Roadmaps
│
├── Resume Analysis
│
├── Mock Interviews
│
├── Internship Recommendations
│
├── Progress Reports
│
└── Pod Members
        │
        ▼
    Setu Pods
        │
        ▼
     Projects
        │
        ▼
       Tasks
```

---

# MVP Development Order

## Sprint 1

- ✅ Authentication
- ✅ User Profile
- 🔄 Profile Setup

---

## Sprint 2

- AI Skill Assessment
- Skill Gap Analysis
- Learning Roadmap

---

## Sprint 3

- AI Setu Pods
- Projects
- Tasks

---

## Sprint 4

- Resume Analysis
- AI Mock Interview
- Internship Recommendations

---

## Sprint 5

- Progress Dashboard
- Notifications
- Deployment

---

# Why This Database Design?

DreamSetu is more than a learning platform.

It creates a complete **AI Career Journey**:

```text
Register
      ↓
Profile Setup
      ↓
AI Skill Assessment
      ↓
Skill Gap Analysis
      ↓
Learning Roadmap
      ↓
AI Setu Pods
      ↓
Real-world Projects
      ↓
Resume Analysis
      ↓
AI Mock Interview
      ↓
Internship Recommendation
      ↓
Career Ready
```

This modular database design supports both the **Buildathon MVP** and future expansion into a production-ready AI-powered collaborative career platform.