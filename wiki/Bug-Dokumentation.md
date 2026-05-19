Bug-Dokumentation – POST-Endpoint Bestellungsverwaltung
=======================================================

Titel des Bugs
--------------

POST-Request für neue Bestellung akzeptiert leere Pflichtfelder nicht korrekt.

* * *

Azure Board – Bug-Arbeitselement
================================

Arbeitselement-Typ
------------------

`Bug`

* * *

Titel
-----

    POST /orders akzeptiert ungültige Eingaben ohne Validierung
    

* * *

Beschreibung
------------

Beim Erstellen einer neuen Bestellung über den POST-Endpoint `/orders` werden leere oder ungültige Felder akzeptiert. Dadurch können unvollständige Bestellungen in der Datenbank gespeichert werden.
Betroffen ist das Backend der Bestellungsverwaltung im Spring-Boot-Service.

* * *

Priorität
---------

`High`

* * *

Bereich
-------

Backend / Order Management

* * *

Zugewiesen an
-------------

Backend Developer

* * *

Fehlerbeschreibung
==================

Der Endpoint zur Erstellung einer Bestellung überprüft Pflichtfelder nicht korrekt.
Folgende Probleme treten auf:
*   Leere Kundendaten werden akzeptiert
    
*   Negative Mengenwerte sind möglich
    
*   Fehlende Produktinformationen führen nicht zu einer Fehlermeldung
    
Dadurch entstehen inkonsistente Daten in der Datenbank.

* * *

Schritte zur Reproduktion
=========================

Schritt 1
---------

Backend starten.

    ./mvnw spring-boot:run
    

* * *

Schritt 2
---------

POST-Request an den Endpoint senden.

    POST /api/orders
    

* * *

Schritt 3
---------

Ungültige Daten senden.

    {
      "customerName": "",
      "productId": null,
      "quantity": -1
    }
    

* * *

Erwartetes Verhalten
====================

Das System sollte:
*   die Eingabe validieren,
    
*   den Request ablehnen,
    
*   und eine Fehlermeldung mit Statuscode `400 Bad Request` zurückgeben.
    
Beispiel:

    {
      "error": "Validation failed"
    }
    

* * *

Tatsächliches Verhalten
=======================

Die Bestellung wird trotz ungültiger Daten gespeichert.
Der Server antwortet mit:

    200 OK
    

Dadurch entstehen fehlerhafte Datensätze in der Datenbank.

* * *

Ursache des Fehlers
===================

Im Spring-Boot-Controller fehlte die Validierung der Request-Daten.
Die DTO-Klasse enthielt keine Validierungsannotationen wie:
*   `@NotBlank`
    
*   `@NotNull`
    
*   `@Min`
    
Zusätzlich wurde im Controller `@Valid` nicht verwendet.

* * *

Lösung
======

Die Validierung wurde im Backend ergänzt.

Beispiel DTO
------------

    public class OrderRequest {
    
        @NotBlank
        private String customerName;
    
        @NotNull
        private Long productId;
    
        @Min(1)
        private int quantity;
    }
    

* * *

Beispiel Controller
-------------------

    @PostMapping
    public ResponseEntity<?> createOrder(
            @Valid @RequestBody OrderRequest request) {
    
        return ResponseEntity.ok(orderService.create(request));
    }
    

* * *

Testergebnis nach Fix
=====================

Nach der Implementierung der Validierung:
*   ungültige Requests werden abgelehnt,
    
*   der Server liefert `400 Bad Request`,
    
*   und fehlerhafte Daten werden nicht mehr gespeichert.
    

* * *

Bug-Lifecycle
=============

| Status | Beschreibung |
| --- | --- |
| New | Bug wurde erstellt |
| Active | Fehleranalyse durchgeführt |
| In Progress | Validierung implementiert |
| Testing | Endpoint getestet |
| Resolved | Bug erfolgreich behoben |
| Closed | Ticket abgeschlossen |

* * *

Verwendete Technologien
=======================

*   Spring Boot
    
*   REST API
    
*   Azure Boards
    
*   Java Validation API
    
*   Git & Pull Requests