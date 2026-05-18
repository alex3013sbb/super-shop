# Rework E-Commerce Platform

## 📋 Projektübersicht

Eine moderne E-Commerce-Plattform für die Rework-Kette, die den Kauf, Verkauf und das Recycling von Gebrauchtwaren ermöglicht.

### Hauptfunktionen

- **Produktverwaltung**: Vollständige CRUD-Operationen für Produktkataloge
- **Kundenverwaltung**: Verwaltung von Kundenkonten und -profilen
- **Bestellungsmanagement**:
  - POST: Neue Bestellungen aufgeben
  - GET: Bestellungen anzeigen und verfolgen
  - PUT: Bestellungen anpassen und aktualisieren
  - DELETE: Bestellungen stornieren
- **Entity-Management**: Vollständige CRUD-Operationen für alle Datenmodelle

### Auftraggeber

Rework-Kette - Nachhaltiger Handel mit Gebrauchtwaren

---

## 👥 Team

| Name                     | Rolle              | Fokusbereich               |
| ------------------------ | ------------------ | -------------------------- |
| **Maksym Podhrushko**    | Frontend Developer | UI/UX, Anforderungsanalyse |
| **Kateryna Shvets**      | Frontend Developer | UI/UX, Agile Prozesse      |
| **Oleksandr Kolomiiets** | Backend Developer  | API, Architektur, DevOps   |

**Team-Grösse**: 3 Personen  
**Projektdauer**: 1 Semester

---

## 🛠️ Technologiestack

### Frontend

#### Framework: **Next.js 15+**

**Entscheidungsbegründung:**

Next.js wurde als Frontend-Framework ausgewählt aus folgenden Gründen:

1. **Server-Side Rendering (SSR) & Static Generation**
   - Schnellere initiale Ladezeiten für bessere User Experience
   - Optimale Performance für produktlastige Seiten

2. **React-basiert**
   - Grosse Community und umfangreiche Dokumentation
   - Komponentenbasierte Architektur für Wiederverwendbarkeit
   - Starkes Ökosystem mit vielen Libraries

3. **Built-in Routing**
   - File-based Routing vereinfacht die Navigation
   - App Router (Next.js 16) für moderne Patterns
   - Einfache API-Route-Integration

4. **Performance-Optimierungen**
   - Automatische Code-Splitting
   - Image-Optimierung out-of-the-box
   - Lazy Loading für bessere Performance

5. **Full-Stack-Fähigkeiten**
   - API Routes für Backend-Integration
   - Middleware-Support für Authentication
   - Server Components für effiziente Datenabfrage

**Alternativen und warum sie nicht gewählt wurden:**

- **React (CRA)**: Keine eingebaute SSR, schlechtere SEO
- **Vue/Nuxt**: Kleineres Ökosystem, Team hat mehr React-Erfahrung
- **Angular**: Zu komplex für Projektumfang, steilere Lernkurve

#### Styling-Library: **Tailwind CSS 3.x**

**Entscheidungsbegründung:**

1. **Utility-First Approach**
   - Schnelle UI-Entwicklung ohne CSS-Dateien zu wechseln
   - Konsistentes Design-System durch vordefinierte Utilities
   - Reduzierung von CSS-Redundanz

2. **Responsive Design**
   - Einfache Breakpoint-Verwaltung
   - Konsistente Responsive Patterns

3. **Anpassbarkeit**
   - Vollständig konfigurierbar via `tailwind.config.js`
   - Eigenes Design-System implementierbar
   - Plugin-Ökosystem für Erweiterungen

### Backend

#### Framework: **Spring Boot 3.x**

#### Sprache: **Java 17+**

**Entscheidungsbegründung:**

1. **Enterprise-Grade Framework**
   - Bewährte Lösung für E-Commerce-Anwendungen
   - Robuste Security-Features
   - Umfangreiche Dokumentation und Community

2. **RESTful API Development**
   - Spring Web für REST-Endpoints
   - Spring Data JPA für Datenbankzugriff
   - Spring Security für Authentication/Authorization

3. **Microservices-Ready**
   - Modular und erweiterbar
   - Service-orientierte Architektur möglich
   - Cloud-native Deployment-Optionen

### Datenbank

**PostgreSQL** (geplant für Production)

- Relationales Datenmodell für E-Commerce-Entities
- ACID-Compliance für Transaktionssicherheit
- Skalierbarkeit und Performance

### DevOps & Tools

- **Version Control**: Git mit Azure DevOps
- **CI/CD**: Azure Pipelines
- **Containerization**: Docker
- **IDE**:
  - Frontend: VSCode
  - Backend: IntelliJ IDEA
- **Collaboration**: Azure Boards, Wiki

---

## 🏗️ Architektur

### System-Architektur

```
┌─────────────────────────────────────────────────┐
│                  Client Layer                    │
│              (Next.js Frontend)                  │
│        React Components + Tailwind CSS           │
└─────────────────────────────────────────────────┘
                       │
                       │ HTTP/REST
                       ▼
┌─────────────────────────────────────────────────┐
│              API Gateway Layer                   │
│           (Next.js API Routes)                   │
└─────────────────────────────────────────────────┘
                       │
                       │ REST API
                       ▼
┌─────────────────────────────────────────────────┐
│             Backend Layer                        │
│          (Spring Boot REST API)                  │
│   ┌─────────────────────────────────────┐       │
│   │     Controller Layer                │       │
│   └─────────────────────────────────────┘       │
│   ┌─────────────────────────────────────┐       │
│   │     Service Layer                   │       │
│   └─────────────────────────────────────┘       │
│   ┌─────────────────────────────────────┐       │
│   │     Repository Layer (JPA)          │       │
│   └─────────────────────────────────────┘       │
└─────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│              Database Layer                      │
│              (PostgreSQL)                        │
└─────────────────────────────────────────────────┘
```

### Frontend-Architektur (Next.js)

```
frontend/
├── app/                        # Next.js App Router
│   ├── (auth)/                # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── products/              # Product pages
│   │   ├── page.tsx          # Product list
│   │   └── [id]/             # Product detail
│   ├── orders/                # Order management
│   ├── profile/               # User profile
│   └── layout.tsx            # Root layout
├── components/                # React components
│   ├── ui/                   # Reusable UI components
│   ├── forms/                # Form components
│   └── layouts/              # Layout components
├── lib/                       # Utility functions
│   ├── api/                  # API client functions
│   └── utils/                # Helper functions
├── hooks/                     # Custom React hooks
├── types/                     # TypeScript types
├── styles/                    # Global styles
│   └── globals.css           # Tailwind imports
├── public/                    # Static assets
└── tailwind.config.js        # Tailwind configuration
```

**Komponenten-Hierarchie:**

- **Page Components**: Route-spezifische Seiten
- **Layout Components**: Wiederverwendbare Layouts (Header, Footer, Sidebar)
- **Feature Components**: Geschäftslogik-spezifische Komponenten
- **UI Components**: Atomare, wiederverwendbare Komponenten (Buttons, Cards, Inputs)

---

## 📦 Installation & Setup

### Frontend Setup

```bash
# Repository klonen
git clone <repository-url>
cd frontend

# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Production
npm run build

# Production Server starten
npm start
```

**Umgebungsvariablen** (`.env.local`):

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_APP_NAME=Rework Platform
```

### Backend Setup

```bash
# Zum Backend-Verzeichnis wechseln
cd backend

# Mit Maven builden
./mvnw clean install

# Application starten
./mvnw spring-boot:run
```

**Application Properties** (`application.yml`):

```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/rework
    username: postgres
    password: password
  jpa:
    hibernate:
      ddl-auto: update
```

### Docker Setup

```bash
# Datenbank starten
docker-compose up -d

# Alle Services starten
docker-compose up --build
```

---

## 🔄 Development Workflow

### Git-Workflow (Gitflow)

Wir verwenden einen Feature-Branch-Workflow mit folgender Struktur:

```
main (production)
  │
  ├── develop (development)
  │     │
  │     ├── feature/product-list
  │     ├── feature/order-management
  │     └── feature/user-authentication
  │
  └── hotfix/* (critical fixes)
```

**Branch-Naming-Konventionen:**

- `feature/beschreibung` - Neue Features
- `bugfix/beschreibung` - Bug-Fixes
- `hotfix/beschreibung` - Critical Production Fixes
- `docs/beschreibung` - Dokumentation

**Commit-Message-Format:**

```
[TYPE] Kurze Beschreibung

Detaillierte Beschreibung (optional)

Task: #24
```

**Types:**

- `feat`: Neues Feature
- `fix`: Bug-Fix
- `docs`: Dokumentation
- `style`: Code-Formatierung
- `refactor`: Code-Refactoring
- `test`: Tests hinzufügen
- `chore`: Build-Tasks, Konfiguration

### Pull Request Prozess

1. **Branch erstellen** von `develop`
2. **Änderungen committen** mit sinnvollen Messages
3. **Pull Request erstellen** in Azure DevOps
4. **Code Review** von mindestens 1 Team-Mitglied
5. **Tests durchführen** (manuell + automatisiert)
6. **Merge** nach erfolgreichem Review
7. **Branch löschen** nach Merge

### Task-Tracking

- **Azure Boards** für Sprint-Planning und Task-Management
- **Task-Status**: To Do → In Progress → In Review → Done
- **Burndown-Charts** zur Fortschrittsverfolgung
- **Daily Standups** für Koordination

---

## 🎯 Challenges & Lösungsansätze

### Challenge 1: Anforderungsanalyse und Priorisierung

**Verantwortlich:** Maksym Podhrushko

**Problem:**
Kundenanforderungen korrekt verstehen, strukturieren und priorisieren (hoch/mittel/tief).

**Lösungsansatz:**

- User Stories mit Akzeptanzkriterien definieren
- MoSCoW-Methode für Priorisierung (Must/Should/Could/Won't)
- Regelmässige Stakeholder-Meetings
- Product Backlog in Azure Boards pflegen

### Challenge 2: Technische Architektur und Technologieauswahl

**Verantwortlich:** Oleksandr Kolomiiets

**Problem:**
Geeignete Technologien auswählen und saubere Architektur entwerfen.

**Lösungsansatz:**

- Evaluierung verschiedener Tech-Stacks
- Proof-of-Concepts für kritische Komponenten
- Clean Code Principles und SOLID-Prinzipien
- Dokumentation der Architekturentscheidungen (ADRs)

### Challenge 3: Zusammenarbeit im Team

**Verantwortlich:** Kateryna Shvets

**Problem:**
Effiziente Teamarbeit mit klarer Rollenverteilung und Kommunikation.

**Lösungsansatz:**

- Scrum-Framework mit 2-Wochen-Sprints
- Klare Aufgabenverteilung (Frontend/Backend)
- Daily Standups (15 min)
- Sprint Reviews und Retrospectives
- Pair Programming für komplexe Features

### Challenge 4: Quellcodeverwaltung mit Git und Azure DevOps

**Verantwortlich:** Gesamtes Team

**Problem:**
Sauberes Branching, Merge-Konflikte vermeiden, konsistente Repository-Struktur.

**Lösungsansatz:**

- Gitflow-Workflow implementieren
- Pull Request Templates
- Branch Protection Rules
- Code Review Guidelines
- Regelmässige Commits (mindestens täglich)
- Commit-Task-Verknüpfung in Azure DevOps

---

## 📚 Markdown-Dokumentation

Alle Projektdokumentationen werden in Markdown verfasst:

**Markdown-Standards:**

- ATX-Style Headers (`#`, `##`, `###`)
- Fenced Code Blocks mit Syntax-Highlighting
- Tabellen für strukturierte Daten
- Aufzählungslisten für Features
- Links und Referenzen

---

## 📋 Definition of Done (DoD)

### Tech Stack & Architecture (Task 24)

- [x] Framework ausgewählt: **Next.js**
- [x] Styling-Library festgelegt: **Tailwind CSS**
- [x] Entscheidung dokumentiert in README.md<>
- [x] Begründung für Technologie-Auswahl dokumentiert
- [x] Architektur-Diagramme erstellt
- [x] Alternative Lösungen evaluiert und dokumentiert

### Versionsverwaltung (HZ5)

- [ ] Gitflow implementiert
- [ ] Feature-Branch-Workflow dokumentiert
- [ ] Regelmässige Commits (täglich)
- [ ] Commit-Task-Verknüpfung in Azure DevOps
- [ ] Pull Request Prozess dokumentiert
- [ ] Markdown-Dokumentation für alle Abgaben

---

## 📝 Lizenz

Dieses Projekt ist Teil eines Schulprojekts und ausschliesslich für Bildungszwecke bestimmt.

---

**Letzte Aktualisierung**: Mai 2026  
**Version**: 1.0.0  
**Status**: In Development

---
