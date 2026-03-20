# 🚀 Task Management System (Backend)

A scalable and secure backend for a Task Management System built with **Node.js, Express, and TypeScript**.
It enables users to authenticate and manage their tasks efficiently with clean architecture and best practices.

---

## ✨ Features

### 🔐 Authentication

* User Registration & Login
* JWT-based Authentication (Access + Refresh Tokens)
* Secure password hashing using bcrypt

### 📋 Task Management

* Create, Read, Update, Delete tasks
* Toggle task completion
* Pagination for large task lists
* Filtering by status
* Search by title/description

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Language:** TypeScript
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication:** JWT
* **Validation:** Zod

---

## 📂 Project Structure

```bash
backend/
├── prisma/          # Database schema
├── src/
│   ├── controllers/ # Request handlers
│   ├── services/    # Business logic
│   ├── routes/      # API routes
│   ├── middleware/  # Auth & error handling
│   ├── utils/       # Helper functions
│   ├── validators/  # Request validation
│   ├── types/       # Type definitions
│   ├── app.ts       # Main app entry
│   └── prisma.ts    # Prisma client setup
├── package.json
└── tsconfig.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Configure environment variables

Create a `.env` file in the backend folder:

```env
DATABASE_URL=your_database_url
ACCESS_TOKEN_SECRET=your_secret
REFRESH_TOKEN_SECRET=your_secret
```

### 3️⃣ Run the server

```bash
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Auth Routes

* `POST /auth/register`
* `POST /auth/login`
* `POST /auth/refresh`
* `POST /auth/logout`

### 📋 Task Routes

* `GET /tasks`
* `POST /tasks`
* `PATCH /tasks/:id`
* `DELETE /tasks/:id`
* `PATCH /tasks/:id/toggle`

---

## 🧠 Key Highlights

* Clean **layered architecture** (Controller → Service → Route)
* Secure authentication with token rotation
* Optimized queries with Prisma ORM
* Scalable and maintainable code structure

---

## 👨‍💻 Author

Rohan

---

## ⭐ Final Note

This project demonstrates backend development skills including authentication, API design, database integration, and clean architecture.
