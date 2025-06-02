# 🧩 Collaborative Task Manager

🔗 **Live Demo**: [https://task-management-app-alpha-rouge.vercel.app](https://task-management-app-alpha-rouge.vercel.app)

A modern task management web app built using **Next.js**, **React**, and a powerful suite of tools. This project was developed as part of a technical interview to showcase full-stack proficiency, modular React architecture, form handling, state management, and API integration.

---

## ✨ Features

- ✅ Create, Read, Update, and Delete tasks (CRUD)
- 📋 Tasks displayed in status-based columns (To Do, In Progress, Done)
- 🔄 Form Validation for title, priority and status
- 🎯 Filter tasks by search, priority and status
- 🧾 Bonus: Recipe page with data from a public API
- 🧪 Form validation with Zod + React Hook Form
- 🎨 Modern UI with Tailwind CSS & Shadcn UI
- 🧩 Modular file structure using the Next.js App Router

---

## 🚀 Tech Stack

| Layer                | Technology                                      |
| -------------------- | ----------------------------------------------- |
| **Framework**        | [Next.js](https://nextjs.org/) (App Router)     |
| **Language**         | TypeScript                                      |
| **Styling**          | Tailwind CSS, Shadcn UI                         |
| **Form Handling**    | React Hook Form + Zod                           |
| **State Management** | Zustand                                         |
| **Data Fetching**    | TanStack Query (React Query)                    |
| **API Integration**  | TheMealDB API (`https://themealdb.com/api.php`) |
| **Icons**            | Lucide React                                    |

---

## 📦 NPM Packages Used

### 🧱 Core Packages

- `next`
- `react`
- `react-dom`
- `typescript`

### 🎨 Styling & UI

- `tailwindcss`
- `postcss`
- `autoprefixer`
- `@shadcn/ui`
- `lucide-react`

### 🧪 Forms & Validation

- `react-hook-form`
- `zod`
- `@hookform/resolvers`

### ⚙️ State Management

- `zustand`

### 🔄 Data Fetching

- `@tanstack/react-query`

---

## 🛠️ Getting Started

### 📌 Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v10 or higher)

---

### 📥 Installation

Clone the repository:

```bash
git clone https://github.com/ankit-github123/task-management-app.git
cd task-management-app
```

---

### ▶️ Running the App Locally

Start the development server:

```bash
npm run dev
```

---

## 📂 Routing Overview

The application is built using **Next.js App Router**. It includes two main routes:

#### 🗂 `/` – Task Management

#### 🍽 `/recipes` – Recipe Explorer

---

## 🧪 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Start production server  |
| `npm run lint`  | Lint code with ESLint    |

---

## 🌐 Recipes Page

You can navigate to the bonus `/recipe` page to:

- View a list of meals fetched from **TheMealDB API**
- Search recipes by name
- View ingredients and instructions
- Uses **TanStack Query** for fetching and caching

> API: [https://themealdb.com/api.php](https://themealdb.com/api.php)

---

## 🧠 Design Decisions

- Used `app/` directory and App Router for modern file-based routing
- Global state handled using Zustand
- Data fetching & caching handled by TanStack Query
- All forms use React Hook Form + Zod for clean validation
- Tailwind CSS + Shadcn UI ensures maintainable styling
- Code is organized into logical domains (tasks, recipes, hooks, types, schema)

---

## ✅ Task Data Model

```ts
{
  id: string;
  title: string;
  description?: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  dueDate?: string;
  assignee?: string;
}
```
