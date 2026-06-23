────────────────────────────────────────
Navigation
────────────────────────────────────────

Logo        Features  About  Contact

                 Login

            Get Started

────────────────────────────────────────

Hero Section

Headline

Subheadline

Primary CTA

Secondary CTA

Illustration

────────────────────────────────────────

Problem Section

Students feel...
Fear
Comparison
No Mentors
No Team

────────────────────────────────────────

How DreamSetu Works

1️⃣ Skill Assessment

↓

2️⃣ AI Analysis

↓

3️⃣ Setu Pod

↓

4️⃣ Build Projects

↓

5️⃣ Become Mentor

────────────────────────────────────────

Core Features

AI Mentor

Skill Assessment

Learning Pods

Progress Tracking

Career Roadmap

Achievements

────────────────────────────────────────

Why DreamSetu?

Comparison Table

DreamSetu

vs

YouTube

ChatGPT

Courses

────────────────────────────────────────

Student Journey

Explorer

↓

Learner

↓

Builder

↓

Collaborator

↓

Mentor

────────────────────────────────────────

Testimonials (Later)

────────────────────────────────────────

FAQ

────────────────────────────────────────

Footer



LandingPage
│
├── Navbar
├── Hero
├── Trust Section
├── Problem Section
├── Solution Section
├── How DreamSetu Works
├── Features
├── Journey Timeline
├── FAQ
├── CTA
└── Footer


✅ Navbar
✅ Hero Section
✅ Problem
✅ Solution
✅ How DreamSetu Works
✅ Features
✅ Footer


-------------------------------------------------------------
DreamSetu

Features   How it Works   About   Contact

                     Login

                 Get Started
-------------------------------------------------------------

Logo

Navigation

Login Button

Get Started Button


2️⃣ Hero Section ⭐⭐⭐⭐⭐

This is the most important part.

------------------------------------------------------------

Learn Together.
Build Together.
Grow Without Fear.

AI-powered collaborative learning where beginners,
intermediate learners, and experts build real projects
together.

[Take Skill Assessment]

[Explore DreamSetu]

               Illustration
------------------------------------------------------------

Left Side
Headline
Description
Two Buttons
Right Side

Illustration showing:   
Beginner

↓

Intermediate

↓

Expert

↓

One Pod

↓

Project Completed

↓

Everyone Levels Up


3️⃣ Problem Section

Heading  Why Do Students Stop Learning?


cards 

😟 Fear of Asking Questions

🤯 Too Many Resources

😔 No Mentors

🤝 No Team

📉 Low Confidence

❌ Comparison Culture



TriadLearn-Roadmap.md
File
🇮🇳 Build for Good 2026 is here!

This Independence Day (15 Aug), students from across India will compete in India's biggest social innovation hackathon — and we want YOU in it.

💡 Build solutions for real problems: employment, healthcare, education, climate, civic access & more
🏆 79 finalists win a refurbished MacBook
💼 Top performers get paid internships & live projects
📜 National certificates for all participants
🤝 Mentorship from industry experts

✅ Free to participate. Zero cost.

📅 Registration closes: 30 June 2026
🔗 Register now →https://www.samasocial.in/hackathon/build-for-good

Don't just study change. Build it. kya ya muja help kara ga
https://docs.google.com/document/d/1YUtP9y0B0P_WJHUgnMEFITkSDm9PI_8ddMh3YpXK3wM/edit?tab=t.0
eska hisab sa batao kab kya hoga 
this
this
thus

Excellent! 🎉

You've successfully installed React Router.

✅ react-router-dom installed

This is our first external library for DreamSetu.

📊 Sprint 1.2 Progress
Task	Status
Remove Vite Demo	⏳
Understand React Flow	⏳
Install Tailwind CSS	⏳
Install React Router	✅
Professional Folder Structure	⏳
🧠 Before We Continue...

I noticed I gave you Tailwind instructions that may not match the latest version. I don't want to teach you outdated practices.

We'll install Tailwind CSS v4 (the current version), which is simpler than older tutorials.

🚀 Step 1: Install Tailwind

Run:

npm install tailwindcss @tailwindcss/vite

When it's done, tell me:

"Installed"

Don't change any files yet.

📚 Why Tailwind?

Suppose you want to make a blue button.

Traditional CSS
.button {
  background: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}

Then:

<button class="button">Login</button>
Tailwind
<button class="bg-blue-500 text-white px-5 py-2 rounded-lg">
  Login
</button>

No separate CSS file.

This makes development much faster, especially in hackathons.

🎯 After Installation

We'll configure three files together:

vite.config.ts
index.css
App.tsx

I'll explain every line.

📁 Next: Professional Folder Structure

After Tailwind is working, we'll create this structure:

src/
│
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
├── pages/
│   ├── Landing/
│   ├── Auth/
│   ├── Dashboard/
│   └── Assessment/
├── routes/
├── services/
├── hooks/
├── context/
├── utils/
├── constants/
├── types/
├── styles/
├── App.tsx
├── main.tsx
└── index.css

Notice something important:

We are not creating these folders just because "everyone does."

Each folder solves a specific problem. Before creating each one, I'll explain:

Why does it exist?
What will we store there?
What happens if we don't have it?
How does it connect to the rest of DreamSetu?

That's how professional engineers think.

🎯 Your Current Task

Run:

npm install tailwindcss @tailwindcss/vite

Reply with "Installed", and then we'll configure Tailwind together using the latest setup. From that point onward, we'll start building DreamSetu's actual UI instead of just configuring tools.


up to date, audited 167 packages in 8s

44 packages are looking for funding
  run npm fund for details

found 0 vulnerabilities

Excellent! 🎉

Now we officially enter Day 1 - Professional Frontend Setup.

Current Progress:

✅ React + TypeScript
✅ React Router
✅ Tailwind Installed
⏳ Configure Tailwind
⏳ Clean Vite
⏳ Create Architecture
Step 1 — Configure Tailwind

Open:

vite.config.ts

Show me its current content.

It should look similar to:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

  ],
})

Absolutely. Since we have limited time, today we will finish the complete Landing Page.

But we won't code blindly.

We will spend 30–45 minutes designing, then 2–3 hours building. This is much faster than redesigning later.

🎯 Today's Goal

By tonight, DreamSetu should have a professional landing page.

What judges should feel

Within 10 seconds, they should understand:

✅ What DreamSetu is
✅ What problem it solves
✅ Why it is different
✅ How it works
✅ Why they should care
🏗 Landing Page Blueprint
1️⃣ Navbar
-------------------------------------------------------------
DreamSetu

Features   How it Works   About   Contact

                     Login

                 Get Started
-------------------------------------------------------------
Components
Logo

Navigation

Login Button

Get Started Button
2️⃣ Hero Section ⭐⭐⭐⭐⭐

This is the most important part.

------------------------------------------------------------

Learn Together.
Build Together.
Grow Without Fear.

AI-powered collaborative learning where beginners,
intermediate learners, and experts build real projects
together.

[Take Skill Assessment]

[Explore DreamSetu]

               Illustration
------------------------------------------------------------
Left Side
Headline
Description
Two Buttons
Right Side

Illustration showing:

Beginner

↓

Intermediate

↓

Expert

↓

One Pod

↓

Project Completed

↓

Everyone Levels Up

This instantly explains your USP.

3️⃣ Problem Section

Heading

Why Do Students Stop Learning?

Cards

😟 Fear of Asking Questions

🤯 Too Many Resources

😔 No Mentors

🤝 No Team

📉 Low Confidence

❌ Comparison Culture
4️⃣ DreamSetu Solution

We don't replace YouTube or ChatGPT.

We connect learners and help them grow together.

hen cards

AI Mentor

↓

Skill Assessment

↓

Setu Pods

↓

Real Projects

↓

Growth Tracking


5️⃣ How DreamSetu Works

Timeline

Create Account

↓

Take AI Assessment

↓

Join Setu Pod

↓

Build Project

↓

Track Progress

↓

Become Mentor


6️⃣ Features

6 Feature Cards

🤖 AI Mentor

👥 Setu Pods

📈 Progress Tracking

🛠 Project Collaboration

🎯 Personalized Roadmap

🏆 Achievements


7️⃣ Why DreamSetu?

Comparison Table

Feature	DreamSetu	YouTube	ChatGPT	Courses
AI Guidance	✅	❌	✅	❌
Team Learning	✅	❌	❌	❌
Project Collaboration	✅	❌	❌	❌
Progress Tracking	✅	❌	❌	Limited
Skill Assessment	✅	❌	❌	❌

This clearly shows DreamSetu's unique value.


8️⃣ Student Journey

Beautiful roadmap


🌱 Explorer

↓

📚 Learner

↓

🛠 Builder

↓

🤝 Collaborator

↓

🎓 Mentor

9️⃣ CTA

Ready to Start Your Journey?

Take your AI Skill Assessment today.

[Get Started]

🔟 Footer

DreamSetu

Features

About

Contact

GitHub

LinkedIn

Hackathon 2026


src/

pages/
    Landing/
        LandingPage.tsx

components/

layout/
    Navbar.tsx
    Footer.tsx

landing/
    HeroSection.tsx
    ProblemSection.tsx
    SolutionSection.tsx
    HowItWorksSection.tsx
    FeaturesSection.tsx
    ComparisonSection.tsx
    JourneySection.tsx
    CTASection.tsx