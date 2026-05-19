# Super Shop - Project Overview

> A modern E-Commerce platform for the Rework-Kette, enabling the purchase, sale, and recycling of used goods.

---

## 📚 Documentation Index

### Core Documentation

- **[Project Declaration](Project-Declaration.md)** - Official project declaration (M426), team members, challenges, and requirements
- **[Scenario](Szenario.md)** - Business context, company background, and project scope

### Development Guides

- **[Connect Azure and Github Repos](Connect-Azure-and-Github-repos.md)** - Guide for setting up dual-repository sync (GitHub + Azure DevOps)

---

## 🎯 Quick Links

### Project Information

| Topic         | Link                                                              |
| ------------- | ----------------------------------------------------------------- |
| Project Goals | [Scenario - Project Assignment](Szenario.md#3-der-projektauftrag) |
| Challenges    | [Project Declaration - Challenges](Project-Declaration.md)        |

### Development Setup

| Topic             | Link                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| Git Workflow      | [Azure & GitHub Setup](Connect-Azure-and-Github-repos.md)            |
| Environment Setup | [Project Declaration - Learning Environment](Project-Declaration.md) |

---

## 🏗️ Project Structure

```
super-shop/
├── springboot-backend/                # Spring Boot backend application
│   ├── src/main/java/                # Java source files
│   │   └── ch/sbb/kolomiiets/shopsystem/
│   │       ├── controller/           # REST API controllers
│   │       ├── service/              # Business logic & DTOs
│   │       ├── persistance/          # JPA repositories & entities
│   │       └── configuration/        # Security & app configuration
│   ├── src/main/resources/           # Application configuration
│   │   ├── application.yaml          # Spring Boot settings
│   │   └── db/migration/             # Flyway database migrations
│   ├── pom.xml                       # Maven dependencies
│   └── compose.yaml                  # Docker Compose configuration
└── wiki/                             # Project documentation
    ├── Overview.md                   # This file - central navigation hub
    ├── Project-Declaration.md        # Official project declaration
    ├── Szenario.md                   # Business scenario & context
    └── Connect-Azure-and-Github-repos.md  # Git setup guide
```

---

## 👥 Team

| Name                     | Role               | Focus Area                   |
| ------------------------ | ------------------ | ---------------------------- |
| **Maksym Podhrushko**    | Frontend Developer | UI/UX, Requirements Analysis |
| **Kateryna Shvets**      | Frontend Developer | UI/UX, Agile Processes       |
| **Oleksandr Kolomiiets** | Backend Developer  | API, Architecture, DevOps    |

**Team Size:** 3 persons  
**Project Duration:** 1 semester

---

## 🛠️ Technology Stack

### Frontend

- **Next.js 15+** - React-based framework with SSR
- **Tailwind CSS 3.x** - Utility-first CSS framework

### Backend

- **Spring Boot 3.x** - Java application framework
- **Java 17+** - Programming language
- **PostgreSQL** - Database (via Docker Compose)
- **Flyway** - Database migrations

### DevOps & Tools

- **Git** - Version control
- **GitHub** - Code repository
- **Azure DevOps** - Project management & CI/CD
- **Docker** - Containerization
- **Maven** - Build tool

---

## 🚀 Key Features

### Product Management

Complete CRUD operations for product catalogs

### Customer Management

Customer account and profile management

### Order Management

- **POST** - Place new orders
- **GET** - View and track orders
- **PUT** - Modify and update orders
- **DELETE** - Cancel orders

### Entity Management

Full CRUD operations for all data models

---

## 📖 About Rework-Kette

The "Rework-Kette" is an established company in sustainable trade with multiple physical stores in the Bern/Zurich area. The company promotes circular economy by purchasing used goods (clothing, electronics, furniture), refurbishing them when needed, and reselling or properly recycling them.

**Read more:** [Scenario - About Rework-Kette](Szenario.md#1-über-die-rework-kette)

---

## 🎓 Learning Environment

- Windows with Docker (or Podman)
- IntelliJ IDEA
- VS Code
- WSL (Windows Subsystem for Linux)

---

## 📝 Project Timeline

**Duration:** 6 months  
**Goal:** Develop a prototype of a modern, performant e-commerce platform

---

_Last updated: May 19, 2026_
