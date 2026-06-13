# Test- und Build-Tools Review

## Aufgabe

Task 62: agile Test- und Build-Tools evaluieren und festlegen

---

## Backend-Testing-Tools

### JUnit 5 (JUnit Jupiter)

- **Typ:** Unit-Test-Framework
- **Einsatz im Projekt:** Alle Backend-Unit-Tests (`StatusServiceTest.java`) werden mit JUnit 5 geschrieben.
- **Warum gewählt:** JUnit 5 ist der de-facto-Standard für Java-Tests, bietet moderne Annotationen (`@Test`, `@ExtendWith`) und ist vollständig in Spring Boot integriert.
- **Bewertung:** Einfach zu verwenden, hervorragende IDE-Integration (VS Code, IntelliJ), grosse Community.

### Mockito

- **Typ:** Mocking-Framework
- **Einsatz im Projekt:** Simuliert Abhängigkeiten (`StatusRepository`, `StatusMapper`) in Unit-Tests mit `@Mock`, `@InjectMocks` und `@ExtendWith(MockitoExtension.class)`.
- **Warum gewählt:** Mockito ermöglicht isolierte Unit-Tests ohne echte Datenbankverbindungen. Perfekt für agile Entwicklung, da Tests schnell und unabhängig laufen.
- **Bewertung:** Industriestandard für Java-Mocking, nahtlose JUnit-5-Integration.

### Spring Boot Test (`spring-boot-starter-test`)

- **Typ:** Integrations-Test-Support
- **Einsatz im Projekt:** Eingebunden via `pom.xml`, stellt die Testinfrastruktur bereit (beinhaltet JUnit 5, Mockito, AssertJ).
- **Warum gewählt:** Bietet alles Notwendige als einzelne Abhängigkeit, inklusive Kontext-Loading für Integrationstests.
- **Bewertung:** All-in-one-Lösung für Spring-Boot-Projekte.

---

## Frontend-Testing-Tools

### Manuelle Tests (explorativ)

- **Typ:** Manueller Akzeptanztest
- **Einsatz im Projekt:** Frontend-Tests wurden manuell durchgeführt (z. B. Produktdetailseite öffnen, ungültige Produkt-IDs testen). Screenshots dienen als Nachweis.
- **Warum gewählt:** Da das Frontend (Next.js) aktuell kein automatisiertes Test-Framework eingebunden hat, wurde für Sprint 1 auf manuelle Tests gesetzt.
- **Bewertung:** Schnell einzusetzen, aber nicht automatisierbar und fehleranfällig bei Regressionstests.

### ESLint

- **Typ:** Statische Code-Analyse / Linting
- **Einsatz im Projekt:** Konfiguriert via `eslint.config.mjs`, läuft mit `npm run lint`.
- **Warum gewählt:** Erkennt Fehler und Code-Qualitätsprobleme im TypeScript/React-Code frühzeitig, bevor Tests laufen.
- **Bewertung:** Wichtiger Bestandteil der Qualitätssicherung im Frontend.

---

## Build-Tools

### Maven (via `mvnw`)

- **Typ:** Build- und Dependency-Management
- **Einsatz im Projekt:** Backend wird mit Maven gebaut (`./mvnw clean install`). Tests werden automatisch mit `mvn test` ausgeführt.
- **Warum gewählt:** Standard für Spring-Boot-Projekte, gut integriert mit CI/CD-Pipelines.
- **Bewertung:** Stabil, weit verbreitet, unterstützt Lifecycle-Management (build, test, package).

### npm

- **Typ:** Build- und Dependency-Management
- **Einsatz im Projekt:** Frontend-Abhängigkeiten und Build-Skripte (`npm run dev`, `npm run build`, `npm run lint`).
- **Warum gewählt:** Standard-Paketmanager für Node.js/Next.js-Projekte.
- **Bewertung:** Grosse Ökosystem-Unterstützung, einfache Skriptverwaltung.

### Docker / Docker Compose

- **Typ:** Containerisierung / Integrations-Build
- **Einsatz im Projekt:** `compose.yaml` (Backend) und `docker-compose.yaml` (Frontend) ermöglichen reproduzierbare Build- und Testumgebungen.
- **Warum gewählt:** Garantiert konsistente Umgebungen für alle Teammitglieder und erleichtert Integrationstests mit echter Datenbank (PostgreSQL).
- **Bewertung:** Essenziell für agile Teams, um "works on my machine"-Probleme zu vermeiden.

---
