<p align="center">
  <img src="https://img.shields.io/badge/NestJS-11-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-100%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeORM-1.0-FF6C37?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PostgreSQL-8.x-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/REST_API-Documented-6c63ff?style=for-the-badge" />
</p>

<h1 align="center">📋 Project Manager API</h1>

<p align="center">
  A RESTful project management back-end built with <strong>NestJS</strong> and <strong>TypeScript</strong> — featuring full CRUD for projects and tasks, relational data modelling with TypeORM and PostgreSQL, and robust validation via class-validator.
</p>

<p align="center">
  <a href="https://github.com/AliMoradpour/project-manager">📂 View Repository</a> ·
  <a href="https://alimoradpour.vercel.app">🌐 Portfolio</a>
</p>

---

## ✨ Features

- 🏗️ **NestJS modular architecture** — clean separation of controllers, services, modules, and DTOs
- 🔒 **100% TypeScript** — strict typing across all layers from route handlers to database entities
- 🗄️ **TypeORM + PostgreSQL** — relational data layer with entity definitions and repository pattern
- ✅ **Validation** — incoming request bodies validated with `class-validator` and `class-transformer`
- 📐 **DTO pattern** — separate Create and Update DTOs ensuring clean, predictable API contracts
- 🧪 **Testing setup** — Jest configured for unit tests (`*.spec.ts`) and e2e tests
- 🎨 **Code quality** — ESLint + Prettier enforced across the entire codebase

---

## 🛠️ Tech Stack

| Layer         | Technology                          |
|---------------|--------------------------------------|
| Framework     | NestJS 11                            |
| Language      | TypeScript 5.7                       |
| ORM           | TypeORM 1.0                          |
| Database      | PostgreSQL (via `pg` 8.x)            |
| Validation    | class-validator · class-transformer  |
| Testing       | Jest · Supertest                     |
| Linting       | ESLint (typescript-eslint) · Prettier|
| Runtime       | Node.js                              |

---

## 📁 Project Structure

```
project-manager/
├── src/
│   ├── app.module.ts           # Root module — wires all feature modules together
│   ├── main.ts                 # Bootstrap entry point (NestFactory, global pipes)
│   │
│   ├── projects/               # Projects feature module
│   │   ├── dto/
│   │   │   ├── create-project.dto.ts
│   │   │   └── update-project.dto.ts
│   │   ├── entities/
│   │   │   └── project.entity.ts
│   │   ├── projects.controller.ts
│   │   ├── projects.service.ts
│   │   └── projects.module.ts
│   │
│   └── tasks/                  # Tasks feature module
│       ├── dto/
│       │   ├── create-task.dto.ts
│       │   └── update-task.dto.ts
│       ├── entities/
│       │   └── task.entity.ts
│       ├── tasks.controller.ts
│       ├── tasks.service.ts
│       └── tasks.module.ts
│
├── test/
│   ├── app.e2e-spec.ts         # End-to-end tests
│   └── jest-e2e.json
│
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
├── eslint.config.mjs
├── .prettierrc
└── package.json
```

---

## 🔌 API Endpoints

### Projects

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/projects`           | Get all projects         |
| GET    | `/projects/:id`       | Get a project by ID      |
| POST   | `/projects`           | Create a new project     |
| PATCH  | `/projects/:id`       | Update a project         |
| DELETE | `/projects/:id`       | Delete a project         |

### Tasks

| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| GET    | `/tasks`          | Get all tasks        |
| GET    | `/tasks/:id`      | Get a task by ID     |
| POST   | `/tasks`          | Create a new task    |
| PATCH  | `/tasks/:id`      | Update a task        |
| DELETE | `/tasks/:id`      | Delete a task        |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- PostgreSQL (local or hosted e.g. [Neon](https://neon.tech) / [Supabase](https://supabase.com))

### Installation

```bash
git clone https://github.com/AliMoradpour/project-manager.git
cd project-manager
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=project_manager
```

### Running the App

```bash
# Development (watch mode)
npm run start:dev

# Standard start
npm run start

# Production
npm run start:prod
```

The API will be available at `http://localhost:3000`.

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch

# Test coverage report
npm run test:cov

# End-to-end tests
npm run test:e2e
```

---

## 🧹 Code Quality

```bash
# Lint and auto-fix
npm run lint

# Format with Prettier
npm run format
```

---

## 🏛️ Architecture Overview

NestJS encourages a clear, opinionated structure. This project follows the standard layered pattern:

```
Request
   ↓
Controller        ← handles HTTP, validates route params
   ↓
Service           ← business logic, calls repository
   ↓
TypeORM Repository ← queries PostgreSQL via entity definitions
   ↓
PostgreSQL
```

Each feature (projects, tasks) is encapsulated in its own **NestJS module**, keeping concerns isolated and the codebase easy to scale.

---

## 🤝 Author

**Ali Moradpour** — [alimoradpour.vercel.app](https://alimoradpour.vercel.app) · [GitHub](https://github.com/AliMoradpour) · [LinkedIn](https://linkedin.com/in/ali-moradpour-04976316a)

---

<p align="center">
  Built to demonstrate back-end API design with NestJS, TypeScript, and PostgreSQL — clean architecture, strict types, and production-ready tooling.
</p>
