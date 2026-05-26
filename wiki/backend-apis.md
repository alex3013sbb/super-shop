# API-Dokumentation (Springdoc OpenAPI)

Dieses Projekt nutzt **Springdoc OpenAPI**, um die REST-API-Dokumentation vollautomatisch direkt aus dem Quellcode zu generieren. Sobald der Docker-Container mit der Spring-Boot-Applikation erfolgreich gestartet ist, wird die gesamte API-Spezifikation analysiert und visuell aufbereitet.

## Zugriff auf die Dokumentation

Nachdem die Container via `docker compose up` hochgefahren sind, kann die interaktive Benutzeroberfläche (**Swagger UI**) über folgende Adresse im Browser aufgerufen werden:

👉 **http://localhost:8080/swagger-ui/index.html**

## Hauptmerkmale & Vorteile

* **Interaktives Testen (Try it out):** HTTP-Anfragen (`GET`, `POST`, `PUT`, `DELETE`) können direkt im Browser ausgeführt werden. Es ist keine externe Software wie Postman notwendig.
* **Automatische Aktualisierung:** Jede Änderung an den Controllern, Endpunkten oder DTOs im Java-Code wird beim nächsten Container-Start automatisch im Webinterface reflektiert.