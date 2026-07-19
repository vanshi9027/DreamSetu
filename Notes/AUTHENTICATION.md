# 🔐 DreamSetu Authentication Module

> Module Name: Authentication
>
> Project: DreamSetu
>
> Tech Stack:
>
> - React
> - React Router
> - React Hook Form
> - Axios
> - Node.js
> - Express.js
> - MongoDB
> - JWT
> - bcrypt
> - Cookie Parser

---

# 📌 Purpose

Authentication verifies the identity of a user before allowing access to protected features.

In DreamSetu, authentication allows users to:

- Register
- Login
- Stay Logged In
- Access Dashboard
- Logout Securely

---

# 🏗 Authentication Architecture

                    Browser
                        │
                        ▼
              React Login/Register
                        │
                        ▼
                React Hook Form
                        │
                        ▼
                   Validation
                        │
                        ▼
                 Axios API Call
                        │
                        ▼
                Express Backend
                        │
                        ▼
                 Authentication
                        │
        ┌───────────────┴───────────────┐
        ▼                               ▼
   MongoDB User                  JWT Generation
        │                               │
        └───────────────┬───────────────┘
                        ▼
                 Cookie Response
                        │
                        ▼
                AuthContext Update
                        │
                        ▼
                  Dashboard Page

---

# 📁 Folder Structure

frontend/

```
src/
│
├── components/
│   └── auth/
│        ├── LoginFormRHF.jsx
│        └── RegisterFormRHF.jsx
│
├── context/
│        AuthContext.jsx
│
├── services/
│        api.js
│        authService.js
│
├── pages/
│        Login.jsx
│        Register.jsx
│
└── App.jsx
```

backend/

```
controllers/
userController.js

routes/
userRouter.js

middleware/
authMiddleware.js

utils/
generateToken.js

models/
userModel.js
```

---

# 🧠 Concepts Learned

---

## 1. React Hook Form

Purpose

- Manage forms
- Validation
- Reduce re-rendering
- Easy submission

Functions learned

```
useForm()

register()

handleSubmit()

watch()

reset()

errors
```

---

## 2. register()

Connects an input to React Hook Form.

Example

```jsx
<input {...register("email")} />
```

Without register()

```
React Hook Form
        ❌
Cannot track input
```

---

## 3. handleSubmit()

Flow

```
User Clicks Submit

↓

Validation Runs

↓

If Valid

↓

onSubmit(data)
```

Never call onSubmit directly.

Always use

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
```

---

## 4. watch()

Purpose

Observe current input value.

Used for

```
Confirm Password

Password Strength

Live Preview
```

Example

```js
const password = watch("password");
```

---

## 5. Axios

Purpose

Frontend communicates with backend.

Flow

```
Component

↓

authService

↓

Axios

↓

Backend

↓

Response
```

---

## Why create authService?

Instead of

```
Login Component

↓

axios.post()

↓

Messy
```

We created

```
Login Component

↓

loginUser()

↓

Axios

↓

Backend
```

Benefits

- Reusable
- Clean Code
- Easy Maintenance

---

# Axios Methods

GET

Used for

```
Get Current User

Logout

Dashboard Data
```

POST

Used for

```
Register

Login
```

---

# AuthContext

Purpose

Store logged-in user globally.

Flow

```
Login Success

↓

setUser()

↓

Entire App knows

↓

User Logged In
```

Without Context

Every component needs props.

With Context

Every component accesses

```
user
```

directly.

---

# Registration Flow

```
Fill Form

↓

React Hook Form Validation

↓

Axios POST

↓

Express

↓

Check Required Fields

↓

Check Existing User

↓

Hash Password

↓

Save User

↓

Generate JWT

↓

Cookie

↓

Response
```

---

# Login Flow

```
Enter Email

↓

Enter Password

↓

Axios POST

↓

Backend

↓

Find User

↓

bcrypt.compare()

↓

Generate JWT

↓

Cookie

↓

Return User

↓

setUser()

↓

Dashboard
```

---

# Password Hashing

Never save

```
123456
```

Instead

```
$2b$10$.....

```

Methods

```
bcrypt.hash()

bcrypt.compare()
```

---

# JWT

Purpose

Identify authenticated users.

Flow

```
Login

↓

Generate Token

↓

Cookie

↓

Browser Saves Cookie

↓

Protected Route

↓

Verify Token

↓

Allow Access
```

---

# Cookies

Why use cookies?

Instead of sending token every request manually,

Browser automatically sends cookie.

```
Browser

↓

Request

↓

Cookie Attached

↓

Backend

↓

Verify Token
```

---

# Error Handling

Before

```
console.log(error)
```

User sees nothing.

After

```
Invalid Email

Email Already Exists

Password Incorrect
```

using

```
apiError
```

---

# Loading State

Problem

User clicks button multiple times.

Solution

```
loading=true

↓

Disable Button

↓

Show

Signing In...

↓

API

↓

loading=false
```

---

# Validation

Frontend

React Hook Form

Backend

Express Validation

Never trust frontend validation only.

---

# Authentication Features Completed

- Register
- Login
- React Hook Form
- Validation
- Axios
- API Service
- MongoDB
- JWT
- Cookie
- bcrypt
- AuthContext
- Error Messages
- Redirect

---

# Remaining Features

- Dashboard
- Logout
- Protected Routes
- Auto Login
- Route Guards
- Loading Screen

---

# Common Bugs Faced

## CORS Error

Reason

Frontend and backend running on different ports.

Solution

Enable CORS.

---

## Axios Network Error

Reason

Backend not running.

---

## 400 Bad Request

Reason

Missing fields

Wrong password

User exists

---

## useContext is not defined

Reason

Forgot import.

```js
import { useContext } from "react";
```

---

## Failed to resolve import

Reason

Wrong relative path.

---

## watch is not defined

Forgot

```js
const password = watch("password");
```

---

# Interview Questions

## Why React Hook Form?

Less re-rendering.

Easy validation.

Better performance.

---

## Why Axios?

Cleaner than fetch.

Automatic JSON.

Interceptors.

Base URL.

---

## Why Context API?

Global state.

Avoid prop drilling.

---

## Why bcrypt?

Never store passwords.

---

## Why JWT?

Stateless Authentication.

---

## Why Cookies?

Automatic authentication.

More secure than localStorage for many auth flows.

---

# Future Improvements

- Google Login
- GitHub Login
- Forgot Password
- Email Verification
- OTP Verification
- Refresh Token
- Multi Device Login
- Remember Me
- Two Factor Authentication

---

# My Learning Summary

In this module I learned

✅ React Hook Form

✅ Axios

✅ API Layer

✅ Context API

✅ JWT

✅ bcrypt

✅ Cookies

✅ Authentication Flow

✅ Frontend Validation

✅ Backend Validation

✅ MongoDB Integration

This module is the foundation for every MERN application.