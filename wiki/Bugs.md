# Dokumentation: Umgang mit Fehlern (Bug-Inzidenz-Prozess)

Ein strukturierter Umgang mit Softwarefehlern (Bugs) sichert die Qualität unseres Produkts. Sobald ein Teammitglied oder eine externe Person einen Fehler entdeckt, wird dieser nach einem standardisierten Prozess im Board erfasst und dokumentiert.

---

## 1. Bug auf dem Board erfassen (Jira/Kanban)

Jeder neu entdeckte Bug muss sofort als eigenes Ticket auf unserem Board angelegt werden. Ein Bug-Ticket sollte folgende Struktur aufweisen:

* **Titel:** Präzise und kurz (z. B. `BUG: Registrierungsbutton ohne Funktion bei mobiler Ansicht`).
* **Beschreibung:**
  * **Ist-Zustand (Aktuelles Verhalten):** Was passiert fälschlicherweise? (inkl. Fehlermeldung/Screenshot).
  * **Soll-Zustand (Erwartetes Verhalten):** Wie sollte es eigentlich funktionieren?
  * **Schritte zur Reproduktion:** Schritt-für-Schritt-Anleitung (1. Seite aufrufen, 2. X klicken, 3. Fehler erscheint).
* **Priorität:** Kritisch, Hoch, Medium oder Niedrig.

---

## 2. Der Workflow im Board

Ein Bug-Ticket durchläuft dieselben Spalten wie eine normale User Story, wird jedoch farblich oder durch das Präfix `BUG:` hervorgehoben:

1. **Backlog / To Do:** Der Bug ist erfasst, aber noch nicht in Arbeit.
2. **In Progress:** Ein Entwickler nimmt sich des Bugs an und sucht nach der Ursache (Root Cause Analysis).
3. **Review / Pull Request:** Die Behebung des Bugs (Bugfix) wird über einen PR eingereicht und von einem anderen Teammitglied reviewed (gemäss unserem PR-Prozess).
4. **Done:** Der Bug ist behoben, getestet und der Code ist im `main`-Branch.