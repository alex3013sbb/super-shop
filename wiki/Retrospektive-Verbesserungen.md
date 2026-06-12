# Prozessverbesserungen aus der Retrospektive

## Ziel

In diesem Dokument werden konkrete Prozessverbesserungen festgehalten, die während der Projektarbeit im Team erkannt wurden. Die Verbesserungen beziehen sich auf die Zusammenarbeit, Git-Workflows, Azure Boards und die Pflege des Sprint Boards.

---

## Verbesserung 1: Burndown Chart regelmässiger pflegen

### Beobachtung

Während des Sprints war unser Burndown Chart nicht optimal aussagekräftig. Der Remaining Work wurde nicht immer regelmässig aktualisiert und einige Tasks wurden erst spät verschoben oder abgeschlossen.

### Problem

Dadurch fiel der Remaining Work nicht kontinuierlich, sondern eher sprunghaft. Für die Sprint-Planung und die Kontrolle des Fortschritts war das ungenau.

### Verbesserung

Das Sprint Board soll während des Sprints konsequenter gepflegt werden.

### Massnahmen

* Tasks direkt beim Start auf `In Progress` setzen.
* Tasks nach Abschluss sofort auf `Done` setzen.
* Remaining Work bei aktiven Tasks aktualisieren.
* Neue Tasks frühzeitig schätzen.
* Burndown Chart regelmässig kontrollieren.

### Erwarteter Nutzen

* Das Burndown Chart wird realistischer.
* Der Projektfortschritt ist besser sichtbar.
* Das Team erkennt früher, ob der Sprint realistisch abgeschlossen werden kann.

---

## Verbesserung 2: Genauere Commit-Beschreibungen verwenden

### Beobachtung

Im Frontend arbeiteten mehrere Personen an ähnlichen Dateien und Komponenten. Nach einem `git pull` war teilweise schwer nachvollziehbar, welche Änderungen genau gemacht wurden.

### Problem

Die Commit-Messages waren zwar mit Azure Boards Tasks verknüpft, aber teilweise zu allgemein formuliert. Dadurch musste man nach einem Pull mehr Zeit investieren, um die Änderungen im Code zu verstehen.

### Verbesserung

Commit-Messages sollen genauer beschreiben, welche Komponente, Seite oder Funktion geändert wurde.

### Massnahmen

Statt allgemeiner Commit-Messages wie:

```text
feat: implement frontend AB#82
```

besser konkrete Beschreibungen verwenden:

```text
feat: route collection cards to category product pages AB#82
```

```text
fix: update cart total when quantity changes AB#78
```

```text
feat: add product detail gallery with thumbnail selection AB#76
```

### Erwarteter Nutzen

* Änderungen sind im Git-Verlauf besser nachvollziehbar.
* Die Verbindung zwischen Code und Azure Task bleibt klar.
* Teammitglieder verstehen nach einem Pull schneller, was geändert wurde.

---

## Verbesserung 3: Bessere Abstimmung bei gemeinsamen Frontend-Dateien

### Beobachtung

Mehrere Personen arbeiteten gleichzeitig am Frontend. Besonders gemeinsam genutzte Dateien wie Header, Footer, ProductCard, Routing oder Produktseiten wurden von mehreren Teammitgliedern verändert.

### Problem

Dadurch entstanden teilweise Merge-Konflikte oder unklare Änderungen. Vor allem bei gemeinsam genutzten Komponenten musste nach einem Pull genauer geprüft werden, was geändert wurde.

### Verbesserung

Vor grösseren Änderungen an gemeinsam genutzten Dateien soll kurz im Team abgesprochen werden, wer woran arbeitet.

### Massnahmen

* Aufgaben im Azure Board klar einer Person zuweisen.
* Vor grösseren Änderungen kurz im Team informieren.
* Gemeinsame Komponenten möglichst klein und klar strukturieren.
* Nach einem Push kurz mitteilen, welche Dateien betroffen sind.
* Bei Konflikten gemeinsam entscheiden, welche Änderungen übernommen werden.

### Erwarteter Nutzen

* Weniger Merge-Konflikte.
* Klarere Zuständigkeiten im Team.
* Schnellere Integration von Änderungen.
* Bessere Zusammenarbeit im Frontend.

---

## Fazit

Aus der Retrospektive wurden konkrete Verbesserungen für die weitere Projektarbeit abgeleitet. Besonders wichtig sind eine regelmässige Pflege des Sprint Boards, genauere Commit-Messages und eine bessere Abstimmung bei gemeinsamen Frontend-Dateien.
