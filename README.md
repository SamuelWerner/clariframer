# Clariframer

## Über das Projekt
Das Projekt wird im Rahmen von Medienprojekt Management im Sommersemster 2018 durchgeführt.

Ziel des Projektes ist es eine Art Wireframe-Tool für Vorträge zu dem Thema HTML&CSS zu erstellen.
Dabei soll ein Dashboard zum Einsatz kommen auf dem HTML-Elemente abgelegt werden können.
Die Elemente können dann im Webseiten-Flow auf ihr Verhalten untersucht werden.
Daher auch der Arbeitstitel "Clariframer". 
Also das Klären (engl: clarify) von dem Verhalten der Elemente mit Hilfe von einer Art Wireframe-Tool.

## Programm ausführen

Wenn der Clariframer nur ausgeführt werden soll, reicht es aus die Dateien aus dem Order `/dist` zu verwenden.
Ein Doppelklick auf `index.html` startet die Anwendung im Browser.

## Informationen zum Drucken

Um Farbige Elemente Drucken zu können, aktivieren sie im Browser "Hintergrundfarben Drucken"
in den erweiterten Einstellungen oder im Druckmenü. Ohne diese Option wird ihr erstelltes 
Clariframe nur in Schwarzweiß zur Verfügung stehen.

# Bei der Entwicklung der Anwendung helfen / Installation

Im folgenden wird auf die technische Umsetzung des Projekts eingegangen.

## Node.js und npm installieren.
Node.js und npm werden nur zur Entwicklung der Anwendung benötigt. Die Installations-Dateien können unter folgendem Link
geladen werden: [Node.js & npm download](https://nodejs.org/en/download/).

## Entwicklungsumgebung aufsetzten

Nach dem Clonen des Git-Repositorys, muss `npm install` in dem Clariframer Verzeichnis ausgeführt werden.
Anschließend kann das Projekt mit `ng serve` gestartet werden.

## Angular

Das Projekt wurde erstellt mit [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Entwicklungs Server

Um den Entwicklungsserver zu starten muss `ng serve` in dem Projektverzeichniss ausfgeführt werden. Navigiere zu `http://localhost:4200/`. 
Bei Änderungen wir die App automatisch neu geladen.

## Code Gerüst

Führe `ng generate component component-name` aus um einen neue "Component" zu erstellen. 
Weitere Befehle sind: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Führe `ng build` aus um ein Build von dem Projekt zu erstellen. Die build Artifikate werden in dem Ordner `dist/` gespeichert. 
Benutze `--prod` flag für einen Produktions Build.
Beispiel: `ng build --prod --base-href ./`

## Weitere Hilfe

Um mehr Informationen über Angular zu erhalten besuche folgende Webseite:
https://angular.io/guide/quickstart
