# Peer-Review der Testfälle und Wiki-Dokumentation

## Aufgabe

Task 66: Peer-Review der Testfälle und Wiki-Dokumentation durchführen

**Reviewer:** Maksym Podhrushko  
**Iteration:** Sprint 1

---

## Ziel des Reviews

Ein Teammitglied prüft, ob die Tests nachvollziehbar sind und ob die Kriterien für die Anforderung "HZ2 Releasezyklen" vollständig abgedeckt und nachweisbar sind.

---

## Geprüfte Dokumente

| Dokument                     | Pfad                          |
| ---------------------------- | ----------------------------- |
| Backend Testfälle            | `wiki/Backend-Testfaelle.md`  |
| Frontend Testfälle           | `wiki/Frontend-Testfaelle.md` |
| Test- und Build-Tools Review | `wiki/Test-Tools-Review.md`   |

---

## Review: Backend-Testfälle

### Positivtest: Status erfolgreich hinzufügen

| Kriterium                     | Bewertung | Bemerkung                                                            |
| ----------------------------- | --------- | -------------------------------------------------------------------- |
| Ziel klar formuliert          | Bestanden | Ziel beschreibt genau, was getestet wird                             |
| Voraussetzungen vollständig   | Bestanden | Mocks und Datenbankzustand sind definiert                            |
| Testschritte nachvollziehbar  | Bestanden | Schritte sind präzise und reproduzierbar                             |
| Erwartetes Ergebnis eindeutig | Bestanden | Rückgabewert, Name und Anzahl der `save()`-Aufrufe sind spezifiziert |
| Nachweis vorhanden            | Bestanden | Screenshot referenziert                                              |

### Negativtest: Löschen eines nicht existierenden Status

| Kriterium                     | Bewertung | Bemerkung                                                                   |
| ----------------------------- | --------- | --------------------------------------------------------------------------- |
| Ziel klar formuliert          | Bestanden | Fehlerfall klar beschrieben                                                 |
| Voraussetzungen vollständig   | Bestanden | Nicht-existierende ID definiert                                             |
| Testschritte nachvollziehbar  | Bestanden | Schritte sind knapp und präzise                                             |
| Erwartetes Ergebnis eindeutig | Bestanden | Rückgabe `false`, kein Exception-Wurf, kein `deleteById()`-Aufruf angegeben |
| Nachweis vorhanden            | Bestanden | Screenshot referenziert                                                     |

**Fazit Backend:** Die Backend-Testfälle sind vollständig, klar strukturiert und gut nachvollziehbar. Positiv- und Negativfall sind beide abgedeckt.

---

## Review: Frontend-Testfälle

### Positivtest: Produktdetailseite öffnen

| Kriterium                     | Bewertung | Bemerkung                                                |
| ----------------------------- | --------- | -------------------------------------------------------- |
| Ziel klar formuliert          | Bestanden | Navigation von Übersicht zu Detailseite klar beschrieben |
| Voraussetzungen vollständig   | Bestanden | Erreichbarkeit und Datenverfügbarkeit genannt            |
| Testschritte nachvollziehbar  | Bestanden | Zwei klare Schritte                                      |
| Erwartetes Ergebnis eindeutig | Bestanden | Name, Preis und Bilder als Kriterien aufgeführt          |
| Nachweis vorhanden            | Bestanden | Screenshot referenziert                                  |

### Negativtest: Ungültige Produktdetailseite

| Kriterium                     | Bewertung       | Bemerkung                                         |
| ----------------------------- | --------------- | ------------------------------------------------- |
| Ziel klar formuliert          | Bestanden       | Ungültige ID als Fehlerfall klar beschrieben      |
| Voraussetzungen vollständig   | Nicht bestanden | Voraussetzungen fehlen im Dokument                |
| Testschritte nachvollziehbar  | Bestanden       | URL direkt angegeben                              |
| Erwartetes Ergebnis eindeutig | Bestanden       | Fehlermeldung, Link und kein 404-Fehler definiert |
| Nachweis vorhanden            | Bestanden       | Screenshot referenziert                           |

**Fazit Frontend:** Die Frontend-Testfälle sind grundsätzlich nachvollziehbar. Beim Negativtest fehlt der Abschnitt "Voraussetzung" – dies sollte ergänzt werden.

---

## Review: Wiki-Dokumentation (Test-Tools-Review)

| Kriterium                           | Bewertung | Bemerkung                                                              |
| ----------------------------------- | --------- | ---------------------------------------------------------------------- |
| Alle eingesetzten Tools aufgeführt  | Bestanden | JUnit 5, Mockito, Spring Boot Test, ESLint, Maven, npm, Docker Compose |
| Begründung für Tool-Wahl vorhanden  | Bestanden | Jedes Tool hat eine "Warum gewählt"-Erklärung                          |
| Bezug zum Projekt erkennbar         | Bestanden | Konkrete Dateien und Befehle referenziert                              |
| Empfehlungen für zukünftige Sprints | Bestanden | Playwright und Jest als Verbesserungen vorgeschlagen                   |
| Übersichtstabelle vorhanden         | Bestanden | Zusammenfassung am Ende des Dokuments                                  |

**Fazit Wiki:** Die Tool-Dokumentation ist vollständig und gut strukturiert.

---

## Abdeckung der Anforderung "HZ2 Releasezyklen"

Die Anforderung HZ2 fordert, dass Releasezyklen durch Tests abgesichert sind und die Qualität vor jedem Release nachweisbar ist.

| Anforderung                                 | Abgedeckt | Nachweis                                                          |
| ------------------------------------------- | --------- | ----------------------------------------------------------------- |
| Unit-Tests für Backend-Services vorhanden   | Ja        | `StatusServiceTest.java` mit JUnit 5 + Mockito                    |
| Positiv- und Negativfälle getestet          | Ja        | Je 2 Testfälle pro Bereich                                        |
| Testergebnisse dokumentiert und nachweisbar | Ja        | Screenshots in `src/test/screenshots/` und `public/tests/images/` |
| Frontend-Verhalten manuell verifiziert      | Ja        | Manuelle Tests mit Screenshot-Nachweisen                          |
| Build-Prozess reproduzierbar                | Ja        | Docker Compose, Maven, npm                                        |

**Gesamtbewertung:** Die Kriterien der Anforderung HZ2 sind für Sprint 1 vollständig abgedeckt und nachweisbar.

---

## Offene Punkte / Verbesserungsvorschläge

1. **Frontend-Negativtest:** Abschnitt "Voraussetzung" ergänzen (analog zum Positivtest).
2. **Automatisierte Frontend-Tests:** Für zukünftige Sprints Playwright oder Jest einführen, um manuelle Tests zu ersetzen.
3. **Mehr Testabdeckung Backend:** Weitere Services (z. B. `ProductService`) mit Unit-Tests abdecken.
