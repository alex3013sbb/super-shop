# Rework E-Commerce Platform

## Projektübersicht

Eine moderne E-Commerce-Plattform für die Rework-Kette, die den Kauf, Verkauf und das Recycling von Gebrauchtwaren ermöglicht.

## Installation & Setup

### Frontend Setup

The frontend is built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

```bash
# Repository klonen
git clone <repository-url>

# Zum Frontend-Verzeichnis wechseln
cd frontend

# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build prüfen
npm run build
```

The frontend will be available at:

```txt
http://localhost:3000
```

**Umgebungsvariablen** (`.env.local`):

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_APP_NAME=Rework Platform
```

### Frontend Docker Setup

To start the frontend development environment with Docker, run:

```bash
docker compose up --build
```

The frontend will be available at:

```txt
http://localhost:3000
```

To stop the container, press `Ctrl + C` or run:

```bash
docker compose down
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

#### Frontend

```bash
cd frontend
docker compose up --build
```

The frontend will be available at `http://localhost:3000`.

> Note: The backend/database Docker setup will be documented separately when the backend compose setup is finalized.

---

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

## Team

| Name                     | Rolle              | Fokusbereich               |
| ------------------------ | ------------------ | -------------------------- |
| **Maksym Podhrushko**    | Frontend Developer | UI/UX, Anforderungsanalyse |
| **Kateryna Shvets**      | Frontend Developer | UI/UX, Agile Prozesse      |
| **Oleksandr Kolomiiets** | Backend Developer  | API, Architektur, DevOps   |

**Team-Grösse**: 3 Personen  
**Projektdauer**: 1 Semester

---

## Technologiestack

#### Frontend Framework: **Next.js 16**

#### Styling Library: **Tailwind CSS 4**

#### Backend Framework: **Spring Boot 3.x**

#### Datenbank: **PostgreSQL**

Für detaillierte Informationen siehe /wiki/Technologiestack.md.

## Architektur

Für detaillierte Informationen siehe /wiki/Architektur.md.

## Code-Konvention

Wir verwenden das **Single Responsibility Principle (SRP)** als primäre Code-Konvention — jede Klasse, Funktion und Komponente hat genau eine Verantwortung.

Für detaillierte Informationen und Beispiele siehe [/wiki/Code-Konvektion(SRP).md](</wiki/Code-Konvektion(SRP).md>).

## Development Workflow

### Git-Workflow (Gitflow)

Wir verwenden einen Feature-Branch-Workflow mit folgender Struktur:

```
main (production)
  │
  ├── frontend (development)
  │     │
  │     ├── feature/product-list
  │     ├── feature/order-management
  │     └── feature/user-authentication
  |
  ├── backend (development)
  │     │
  │     ├── feature/aoi-implementation
  │     └── feature/user-registration
```

<!-- HIER MUSS ALLES MIT WIKI ÜBEREINSTIMMEN -->

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

## Challenges & Lösungsansätze

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

## Markdown-Dokumentation

Alle Projektdokumentationen werden in Markdown verfasst:

**Markdown-Standards:**

- ATX-Style Headers (`#`, `##`, `###`)
- Fenced Code Blocks mit Syntax-Highlighting
- Tabellen für strukturierte Daten
- Aufzählungslisten für Features
- Links und Referenzen

---

## Definition of Done (DoD)

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

## Lizenz

Dieses Projekt ist Teil eines Schulprojekts und ausschliesslich für Bildungszwecke bestimmt.

---

**Letzte Aktualisierung**: Mai 2026  
**Version**: 1.0.0  
**Status**: In Development

---
