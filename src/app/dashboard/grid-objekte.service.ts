import {Injectable} from '@angular/core';
import {HTMLObjekt} from './html-objekte/HTMLObjekt';

/*
*   Diese Klasse verwaltet alle Objekte die auf dem Dashboard liegen.
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*   @Bearbeitet von Florian Andreas Schäfer <florian.andreas.schaefer@iem.thm.de>
*   @Bearbeitet von Yavuz Bulunmaz
*/

@Injectable({
  providedIn: 'root'
})
export class GridObjekteService {
  public htmlObjekte = Array<HTMLObjekt>();
  public globalObjektID = 0;
  public aktuelleSeitenId = 'homepage';

  constructor() {
  }

  htmlObjektHinzufuegen(neuesObjekt: HTMLObjekt) {
    this.globalObjektID++;
    neuesObjekt.id = this.globalObjektID;
    this.htmlObjekte.push(neuesObjekt);
    this.abspeichern(this.aktuelleSeitenId);
    if (neuesObjekt.innereHTMLObjekte.length > 0) {
      this.rekursivGlobalIDVergeben(neuesObjekt);
    }
  }

  private rekursivGlobalIDVergeben(obj: HTMLObjekt) {
    if (null == obj.id) {
      this.globalObjektID++
      obj.id = this.globalObjektID;
    }

    if (obj.innereHTMLObjekte.length > 0) {
      for (const htmlObj of obj.innereHTMLObjekte) {
        this.rekursivGlobalIDVergeben(htmlObj);
      }
    }
  }

  htmlObjektGlobalIDFuerInnereElementeErzeugen(obj: HTMLObjekt) {
    if (obj.innereHTMLObjekte.length > 0) {
      this.rekursivGlobalIDVergeben(obj);
    }
  }


  getGridHtmlObjekte(): Array<HTMLObjekt> {
    if (this.htmlObjekte.length === 0) {
      this.laden();
    }
    return this.htmlObjekte;
  }

  objektAnhandDerIDHolen(id: number): HTMLObjekt {
    return this.objektAnhandDerIDHolenRekursiv(id, this.htmlObjekte);
  }

  private objektAnhandDerIDHolenRekursiv(id: any, objekte: Array<HTMLObjekt>): HTMLObjekt {
    for (const htmlObjekt of objekte) {
      if (htmlObjekt.id + '' === id + '') {
        return htmlObjekt;
      } else if (htmlObjekt.innereHTMLObjekte != null && htmlObjekt.innereHTMLObjekte.length > 0) {
        const match = this.objektAnhandDerIDHolenRekursiv(id, htmlObjekt.innereHTMLObjekte);
        if (match != null) {
          return (match);
        }
      }
    }
  }

  htmlObjekteLoeschen(): void {
    this.htmlObjekte.splice(0, this.htmlObjekte.length);
    this.globalObjektID = 0;
    this.abspeichern(this.aktuelleSeitenId);
  }

  einzelnesHtmlObjektLoeschen(obj: HTMLObjekt): void {
    this.einzelnesHtmlObjektLoeschenRekursiv(obj, this.htmlObjekte);
  }

  private einzelnesHtmlObjektLoeschenRekursiv(obj: HTMLObjekt, htmlObjekte: Array<HTMLObjekt>): void {
    let index = -1;
    if (null != htmlObjekte) {
      index = htmlObjekte.indexOf(obj);
    }

    if (index !== -1) { // index=-1 bedeutete Element nicht im Array vorhanden
      htmlObjekte.splice(index, 1);
      this.abspeichern(this.aktuelleSeitenId);
    } else {
      if (null != htmlObjekte) {
        for (const htmlObjekt of htmlObjekte) {
          this.einzelnesHtmlObjektLoeschenRekursiv(obj, htmlObjekt.innereHTMLObjekte);
        }
      }
    }
  }

  abspeichern(gewaehlteSeite: string): void {
    localStorage.setItem(gewaehlteSeite, JSON.stringify(this.htmlObjekte));
  }

  laden(): void {
    const Id = localStorage.getItem('aktuelleSeitenId');
    this.setzeAktuelleSeitenId(Id);
    const eintraegeArray = localStorage.getItem(Id);
    if (null != eintraegeArray) {
      this.htmlObjekte = JSON.parse(eintraegeArray);
    }
    if (null == this.htmlObjekte) {
      this.htmlObjekte = new Array<HTMLObjekt>();
    }
    this.globalIdEinlesen();
  }

  setzeAktuelleSeitenId(eigeneId: string) {
    this.aktuelleSeitenId = eigeneId;
  }

  holeAktuelleSeitenId() {
    return this.aktuelleSeitenId;
  }

  /*
  Die Methode ruft die rekursive Methode alleElementeAlsXMLRekursiv(..)
  auf um alle HTMLObjekte auf dem Grid in ein XML Format zu parsen.
  Dabei wird auf die inneren HTML Objekte rekursiv zugegriffen.
   */
  public alleElementeAlsXML() {
    let result = '';
    result += '<grid>' + this.alleElementeAlsXMLRekursiv(this.htmlObjekte) + '</grid>';
    return result;
  }

  private alleElementeAlsXMLRekursiv(objekte: Array<HTMLObjekt>): string {
    let result = '';
    for (const htmlObjekt of objekte) {
      if (htmlObjekt.innereHTMLObjekte == null || htmlObjekt.innereHTMLObjekte.length <= 0) {
        result += '<htmlObjekt>' + '' +
                  '<innereHTMLObjekte></innereHTMLObjekte>' +
                  this.jsonObjectToXml(htmlObjekt) +
                  '<' + '/' + 'htmlObjekt>';
      } else {
        result += '<htmlObjekt>' + this.jsonObjectToXml(htmlObjekt) +
          '<innereHTMLObjekte>' +
          this.alleElementeAlsXMLRekursiv(htmlObjekt.innereHTMLObjekte) +
          '</innereHTMLObjekte>' + '<' + '/' + 'htmlObjekt>';
      }
    }
    return result;
  }

  public xmlInJSONumwandelnUndInGridLaden(text) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'text/xml');
    const x = xmlDoc.documentElement.childNodes;
    localStorage.setItem(this.aktuelleSeitenId, '[' + this.xmlInJsonUmwandelnRekursiv(x) + ']');
    window.location.reload();
  }

  public JSONInGridLaden(text) {
    localStorage.setItem(this.aktuelleSeitenId, text);
    window.location.reload();
  }

  private xmlInJsonUmwandelnRekursiv(kindKnoten) {
    let result = '';
    for (let i = 0; i < kindKnoten.length; i++) {
      if ((null != kindKnoten[i].nodeName) ) {
        // Abfrage testet ob das HTMLObjekt Kinder hat. Falls ja, wird das Element mit Kindern anders behandelt und
        // alle Kinder werden dabei in das Eltern-Element gelegt.
        if (kindKnoten[i].nodeName === 'htmlObjekt' || kindKnoten[i].nodeName === 'grid') {
          // grid und htmlObjekt werden ignoriert und durch eine öffnende und schließende geschweifte Klammer ersetzt.
          result += '{' + this.xmlInJsonUmwandelnRekursiv(kindKnoten[i].childNodes) + '}';

        } else if (kindKnoten[i].nodeName === 'innereHTMLObjekte') {
          // Kinder von dem Knoten erkannt und innerhalb von dem Knoten innereHTMLObjekte aufbauen
          result += '"innereHTMLObjekte":[' + this.xmlInJsonUmwandelnRekursiv(kindKnoten[i].childNodes) + ']';

        } else if (null != kindKnoten[i].childNodes && null != kindKnoten[i].childNodes[0]) {
          // Ansonsten die Werte des Knotens auslesen und innerhalb des Knotens ausgeben
          if (kindKnoten[i].childNodes[0].nodeValue === 'false' || kindKnoten[i].childNodes[0].nodeValue === 'true') {
              // Bei true oder false keine Hochkommata
              result += '"' + kindKnoten[i].nodeName + '":' + kindKnoten[i].childNodes[0].nodeValue;
          } else {
              result += '"' + kindKnoten[i].nodeName + '":"' + kindKnoten[i].childNodes[0].nodeValue + '"';
          }

          this.xmlInJsonUmwandelnRekursiv(kindKnoten[i].childNodes);
        } else {
          continue;
        }
        if (i !== (kindKnoten.length - 1)) { // Nur ein Komma hinzufügen wenn es nicht das letzte Element ist.
          result += ',';
        }
      }
    }
    return result;
  }

  // Die Methode wandelt ein HTMLObjekt in eine XML Struktur um
  private jsonObjectToXml(obj) {
    let xml = '';
    for (const prop in obj) {
      if (!obj.hasOwnProperty(prop)) {
        continue;
      }
      if (obj[prop] === undefined) {
        continue;
      }
      if (prop === 'innereHTMLObjekte') { // Wird von alleElementeAlsXMLRekursiv(..) erzeugt
        continue;
      }
      xml += '<' + prop + '>';
      if (typeof obj[prop] !== 'object') {
        xml += obj[prop];
      }
      xml += '</' + prop + '>';
    }
    return xml;
  }

  // Beim Laden muss die aktuell höchste globale ID ermittelt werden
  // Damit neu erstellte Objekte wieder eine korrekte ID bekommen.
  private globalIdEinlesen() {
    return this.globalIdEinlesenRekursiv(this.htmlObjekte);
  }

  private globalIdEinlesenRekursiv(objekte: Array<HTMLObjekt>) {
    for (const obj of objekte) {
      if (obj.id >= this.globalObjektID) {
        this.globalObjektID = obj.id;
      }
      if (obj.innereHTMLObjekte != null && obj.innereHTMLObjekte.length > 0) {
        this.globalIdEinlesenRekursiv(obj.innereHTMLObjekte);
      }
    }
  }

  animationZueruecksetzen() {
    for (const obj of this.htmlObjekte) {
      obj.animationStatus = 'stop';
    }
  }

  positionAllerObjekteAufDemGridVeraendern(position: string, widthAussschalten: boolean) {
    for (const obj of this.htmlObjekte) {
      obj.animationStatus = 'change';
      obj.position = position;
      obj.widthAusschalten = widthAussschalten;
    }
  }
}
