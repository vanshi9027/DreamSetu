# DreamSetu API Design

## Purpose

This document defines the REST APIs required for the DreamSetu MVP.

The APIs connect the frontend, backend, database, and AI services to provide a seamless collaborative learning experience.

---

# API Base URL

Development

/api/v1

Production

https://dreamsetu.com/api/v1

---

# Authentication Module

## Register User

POST /auth/register

Purpose

Create a new student account.

Request

{
  "fullName": "Aditya",
  "email": "aditya@gmail.com",
  "password": "********"
}

Response

{
  "success": true,
  "message": "Registration Successful",
  "userId": "uuid"
}

---

## Login

POST /auth/login

Request

{
  "email": "aditya@gmail.com",
  "password": "********"
}

Response

{
  "token": "JWT_TOKEN",
  "user": {}
}

---

## Logout

POST /auth/logout

---

## Get Current User

GET /auth/me

Response

{
  "id":"",
  "name":"",
  "email":"",
  "skillLevel":""
}

---

# User Module

## Get Profile

GET /users/profile

---

## Update Profile

PUT /users/profile

Request

{
  "college":"",
  "branch":"",
  "skills":[],
  "preferredDomain":"Web Development",
  "weeklyAvailability":"10 Hours"
}

---

# Skill Assessment Module

## Start Assessment

GET /assessment/start

Returns

- Questions
- Timer
- Difficulty

---

## Submit Assessment

POST /assessment/submit

Request

{
  "answers":[]
}

Response

{
  "skillLevel":"Intermediate",
  "score":84,
  "feedback":"Good JavaScript knowledge"
}

---

# AI Module

## Analyze Skill

POST /ai/analyze

Purpose

Analyze assessment and classify the user.

Response

{
  "skillLevel":"Intermediate",
  "recommendations":[]
}

---

## Generate Learning Roadmap

POST /ai/roadmap

Response

{
  "roadmap":[]
}

---

## AI Mentor Chat

POST /ai/chat

Request

{
  "message":"Explain Flexbox"
}

Response

{
  "reply":"..."
}

---

# Setu Pod Module

## Create Pod

POST /pods/create

(Admin / AI)

---

## Get My Pod

GET /pods/my-pod

Response

{
  "podName":"Frontend Warriors",
  "members":[]
}

---

## Get Pod Members

GET /pods/:id/members

---

## Leave Pod

POST /pods/leave

---

# Project Module

## Get All Projects

GET /projects

---

## Get Project Details

GET /projects/:id

---

## Create Project

POST /projects

(Admin)

---

## Join Project

POST /projects/:id/join

---

# Task Module

## Get Tasks

GET /tasks

---

## Create Task

POST /tasks

---

## Update Task

PUT /tasks/:id

---

## Complete Task

POST /tasks/:id/complete

---

# Task Submission Module

## Submit Work

POST /submissions

Request

{
  "taskId":"",
  "githubLink":"",
  "demoLink":""
}

---

## Review Submission

PUT /submissions/:id/review

---

# Progress Module

## Dashboard

GET /dashboard

Returns

- Current Level
- Contribution Score
- Progress
- Active Project

---

## Progress Report

GET /progress

---

## Weekly Report

GET /progress/weekly

---

# Achievement Module

## Get Badges

GET /achievements

---

## Unlock Badge

POST /achievements/unlock

---

# Chat Module

## Get Messages

GET /pods/:id/messages

---

## Send Message

POST /pods/:id/messages

---

# Notification Module

## Get Notifications

GET /notifications

---

## Mark As Read

PUT /notifications/:id

---

# Response Format

Success Response

{
  "success": true,
  "data": {}
}

Error Response

{
  "success": false,
  "message": "Something went wrong"
}

---

# Authentication

Protected APIs require JWT Token.

Authorization

Bearer <JWT_TOKEN>

---

# MVP APIs

Authentication

✅ Register

✅ Login

✅ Logout

Users

✅ Profile

Assessment

✅ Start Assessment

✅ Submit Assessment

AI

✅ Analyze Skill

✅ AI Mentor Chat

Setu Pods

✅ Get My Pod

Projects

✅ Get Projects

Tasks

✅ Get Tasks

✅ Submit Task

Dashboard

✅ Progress

Chat

✅ Send Message

---

# Future APIs

- Video Calling
- Voice AI Mentor
- Resume Builder
- Mock Interview
- Internship Matching
- Company Challenges
- Hackathon Mode
- Learning Seasons
- Community Forums

---

# API Architecture

React Frontend

↓

Express API

↓

Business Logic

↓

Supabase Database

↓

AI Service

↓

Response to Frontend