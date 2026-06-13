# Zustands- und Zuordnungspflege im Azure Board

## Ziel

Ziel dieser Dokumentation ist es, die Pflege der Zustände und Zuständigkeiten im Azure DevOps Board während des Projekts zu bewerten.

Das Board sollte während der gesamten Projektlaufzeit den aktuellen Arbeitsstand möglichst korrekt abbilden. Dazu gehörten insbesondere:

- die korrekte Zuweisung von Tasks,
- die regelmässige Aktualisierung des Status,
- die nachvollziehbare Beschreibung der Aufgaben,
- die Dokumentation von Problemen und Verbesserungen,
- die Verknüpfung von Arbeitsschritten mit Commits und Merge Requests.

## Allgemeine Bewertung

Die Zustands- und Zuordnungspflege wurde während des Projekts grösstenteils korrekt durchgeführt.

Ungefähr **80 % der Tasks wurden sauber und nachvollziehbar gepflegt**. In den meisten Fällen waren:

- die Aufgaben einer verantwortlichen Person zugewiesen,
- die Tasks dem richtigen Sprint zugeordnet,
- die Zustände aktuell,
- erledigte Aufgaben auf `Done` gesetzt,
- laufende Aufgaben auf `In Progress` gesetzt,
- offene Aufgaben als `To Do` oder `New` erkennbar.

Dadurch war der allgemeine Projektfortschritt im Azure Board gut sichtbar.

## Positiv umgesetzte Punkte

Folgende Punkte wurden überwiegend korrekt umgesetzt:

### Zustände

Die meisten Tasks wurden entsprechend ihrem tatsächlichen Bearbeitungsstand aktualisiert.

Verwendete Zustände waren unter anderem:

- `New`
- `To Do`
- `In Progress`
- `Done`

Abgeschlossene Aufgaben wurden in der Regel nicht unnötig lange offen gelassen.

### Zuweisung

Die meisten aktiven Tasks waren einem konkreten Teammitglied zugeordnet.

Dadurch war für das Team erkennbar:

- wer für eine Aufgabe verantwortlich ist,
- welche Aufgaben aktuell bearbeitet werden,
- wie die Arbeit im Team verteilt ist.

### Sprint-Zuordnung

Die Tasks und Product Backlog Items wurden überwiegend den passenden Iterationen zugeordnet.

Beispiele:

- vorbereitende Aufgaben in Sprint 0,
- Frontend-, Testing- und Dokumentationsaufgaben in Sprint 1.

### Nachvollziehbarkeit

Die wichtigsten Projektbereiche wurden im Board abgebildet:

- Frontend-Entwicklung,
- Backend- und Datenbank-Setup,
- Testing,
- Wiki-Dokumentation,
- Projektorganisation.

## Aufgetretene Probleme

Trotz der grundsätzlich guten Pflege traten gelegentlich Probleme auf.

### Status wurde nicht immer sofort aktualisiert

Einzelne Tasks blieben zeitweise auf einem alten Status, obwohl die Arbeit bereits begonnen oder abgeschlossen war.

Beispiele:

- ein Task war noch auf `To Do`, obwohl bereits daran gearbeitet wurde,
- ein abgeschlossener Task wurde erst später auf `Done` gesetzt,
- ein Work Item war bereits erledigt, aber noch nicht entsprechend aktualisiert.

### Zuweisung war teilweise unvollständig

Bei einzelnen Tasks fehlte zeitweise eine verantwortliche Person.

Dadurch war nicht immer sofort erkennbar, wer den Task übernehmen sollte.

### Beschreibung war nicht immer einheitlich

Die Qualität der Task-Beschreibungen war unterschiedlich.

Einige Tasks enthielten:

- ein klares Ziel,
- eine verständliche Beschreibung,
- konkrete Anforderungen.

Andere Tasks waren hingegen sehr kurz formuliert und enthielten wenig Kontext.

Dadurch war teilweise zusätzlicher Abstimmungsaufwand notwendig.

### Definition of Done war nicht konsistent

Die Definition of Done wurde nicht bei jedem Task gleich ausführlich beschrieben.

Bei einigen Aufgaben war klar erkennbar, wann sie als abgeschlossen gelten. Bei anderen fehlten konkrete Kriterien.

Eine konsistente Definition of Done hätte beispielsweise folgende Punkte enthalten können:

- Funktion wurde implementiert,
- Funktion wurde getestet,
- keine bekannten kritischen Fehler,
- Code wurde reviewed,
- Dokumentation wurde aktualisiert,
- Task wurde mit Commit oder Merge Request verknüpft.

### Commit-Nachrichten waren teilweise zu kurz

Die Commit-Nachrichten waren nicht immer ausreichend beschreibend.

Beispiele für zu kurze Commit-Nachrichten:

```text
fix
update
changes
frontend
test
```
