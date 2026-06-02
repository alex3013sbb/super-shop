# Gitflow

Das Branch Konzept ist einfach und sehr praktisch. Da wir ein kleines Team sind und in 2 Untergruppen unterteilt, gibt es Sinn nur 3 Branches zu haben:
- main
- frontend
- backend

---
# Branch Naming Rules
Wer an einem der beiden Working-Branches (frontend, backend) arbeitet, sollte laut dieser Schablone ihre Branches nennen:

```
feat|fix|refactor/frontend|backend-[task_id]
task_id is optional
````

```
example:
> feat/frontend-login-page-42
> fix/backend-database-error-105
````

---
 # Pull Request Prozess 

Um die Codequalität hoch zu halten und Fehler auf dem `main`-Branch zu verhindern, haben wir im Team eine strikte Regel vereinbart: **Niemand merget Code direkt oder alleine in den `main`-Branch.** 

Jede Änderung muss zwingend über einen Pull Request (PR) laufen und von mindestens einer anderen Person aus dem Team überprüft und freigegeben werden.

---

## Schritt-für-Schritt-Anleitung zum Mergen von Code

Hier ist der genaue Ablauf, an den sich alle drei Entwickler halten müssen, sobald ein Task fertiggestellt wurde:

### Schritt 1: Lokale Änderungen pushen
Sobald du dein Feature oder deinen Bugfix auf deinem eigenen Feature-Branch fertig entwickelt und lokal getestet hast, pushst du deinen Branch in das Remote-Repository.
* *Befehl / Aktion:* `git push origin feature/dein-branch-name` (oder direkt über die IDE).

### Schritt 2: Pull Request (PR) erstellen
Gehe auf unsere Git-Plattform und erstelle einen neuen Pull Request von deinem Feature-Branch in den `main`-Branch.
* **Titel & Beschreibung:** Schreibe kurz und verständlich, was geändert wurde (idealerweise mit Bezug zur Azure-Ticketnummer, z. B. `#55 Wiki: Pull-Request-Prozess dokumentieren`).

### Schritt 3: Reviewer einladen (Vier-Augen-Prinzip)
Da wir ein 3-Personen-Team sind, musst du aktiv **mindestens einen der anderen zwei Teamkollegen** als „Reviewer“ (Rezensenten) für deinen Pull Request zuweisen.
* Schicke den Link zum PR am besten kurz in unseren Team-Chat, damit die andere Person Bescheid weiss.

### Schritt 4: Code-Review & Feedback
Der eingeladene Teamkollege prüft den Code auf:
* Logische Fehler oder unsauberen Code.
* Einhaltung unserer Projektstandards.
* Funktionalität.
* *Falls Code-Review fehlschlägt:* Der Reviewer hinterlässt Kommentare. Du besserst nach und pushst erneut. Der PR aktualisiert sich automatisch.

### Schritt 5: Genehmigung (Approval) erhalten
Sobald der Reviewer mit dem Code zufrieden ist, klickt er auf **"Approve"** (Genehmigen). Erst durch dieses Approval wird der Merge-Button für den Branch freigeschaltet.

### Schritt 6: Mergen und Branch löschen
Nachdem das Approval vorliegt, darfst du (oder der Reviewer) den Pull Request schliessen und die Änderungen via **"Merge Pull Request"** in den `main`-Branch einfliessen lassen. 

 ---
 

# Commit-Richtlinien & Task-Verknüpfung

Um die Historie unseres Repositories sauber, lesbar und nachvollziehbar zu halten, folgen alle Teammitglieder beim Committen von Code standardisierten Regeln. Dies erleichtert auch das spätere Code-Review im Pull Request.

---

## 1. Struktur einer Commit-Nachricht

Jeder Commit muss eine kurze, aussagekräftige Beschreibung enthalten, die im Präsens formuliert ist. Sie soll prägnant erklären, *was* geändert wurde und *warum*.

### Regel für die Ticket-Verknüpfung:
* **Mit Ticket-Bezug (Empfohlen):** Es wird dringend empfohlen, die entsprechende Ticketnummer aus unserem Kanban-Board an den Anfang der Nachricht zu stellen. Dadurch verknüpfen Tools (GitHub mit Azure) den Commit automatisch mit dem Task.
* **Ohne Ticket-Bezug (Auch möglich):** Es kann die Ticketnummer weggelassen werden. Ein aussagekräftiger Text ist aber dennoch Pflicht.

---

## 2. Beispiele für gute und schlechte Commits

### 🟢 Gute Beispiele (Aussagekräftig & strukturiert)
* `[#54] Add commit guidelines to project wiki` *(Mit Ticket-Bezug)*
* `Fix broken padding on mobile event cards` *(Ohne Ticket-Bezug, aber klar verständlich)*
* `[#50] Correct Spring datasource environment variables in docker-compose`

### 🔴 Schlechte Beispiele (Bitte unbedingt vermeiden!)
* `fix` *(Sagt nichts aus)*
* `update code` *(Was genau wurde aktualisiert?)*
* `bugfix 234` *(Keine Beschreibung der eigentlichen Änderung)*
* `wip` *(Work in Progress – sollte nicht unkommentiert auf den Remote-Branch)*

---

## 3. Warum machen wir das?

1. **Schnelle Fehlersuche:** Wenn später ein Bug auftritt, sehen wir über `git log` sofort, welcher Commit welche Änderung eingeführt hat.
2. **Einfacheres Review:** Der Reviewer versteht beim Pull Request sofort den Zweck der Code-Änderungen, ohne jede Zeile mühsam erraten zu müssen.
3. **Automatisierung:** Durch die Ticket-ID im Commit wechselt das Ticket auf manchen Boards automatisch den Status, was uns manuellen Aufwand erspart.