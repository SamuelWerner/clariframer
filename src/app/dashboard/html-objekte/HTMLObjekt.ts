/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de> on 21.05.2018
 *
 * Alle HTML-Objekte aus dem html-objekte Verzeichnis erben von diesem Objekt
 * Das Objekt hat alle Attribute aus dem HTML5 Standard, zudem die gängigsten
 * CSS-Attribute.
 *
 * Das HTML-Objekt kann Kind-Elemente aufnehmen die wiederrum ein HTMLObjekt sind.
 * Dadurch können die typischen Verschachtelungen, die man von HTML-Dokumenten
 * kennt, aufgebaut werden.
 */

export class HTMLObjekt {
  // Spezial-Attribute
  tagName: string;
  innereHTMLObjekte: Array<HTMLObjekt>;
  liegtAufDemGrid: boolean; // Zeigt an wenn es auf dem Grid liegt und nicht innerhalb der Toolbox existiert.
  innererText = '';
  inDiesesObjektKannGedropptWerden: boolean;
  widthAusschalten: boolean; // Wird verwendet um beim natürlichen Flow die ganze Breite anzuzeigen
  animationStatus: any;

  // Attribute aus dem HTML5 Standard
  // https://www.w3schools.com/tags/ref_standardattributes.asp
  id: number;
  accesskey: string;
  class: string;
  contenteditable: string;
  dir: string;
  draggable: string;
  dropzone: string;
  hidden: boolean;
  lang: string;
  spellcheck: string;
  style: string; // Wird nicht benötigt (Stattdessen Style-Attribute verwenden)
  tabindex: string;
  title: string;
  translate: string;

  // Die wichtigsten Formatierungsregeln von
  // https://www.w3schools.com/cssref/default.asp

  // Allgemein
  width: string;
  height: string;
  background_color: string;
  display: string;
  z_index: number;
  background: string;
  opacity: number;
  overflow: string;
  visibility: string;

  // Umrandung
  border: string;
  border_color: string;
  border_style: string;
  border_radius: string;
  margin: string;
  padding: string;
  outline: string;

  // Ausrichtung
  position: string;
  position_x: string; // left
  position_y: string; // top
  transform: string;
  float: string;
  clear: string;

  // Text
  color: string;
  font_weight: string;
  font_style: string;
  font_family: string;
  text_align: string;
  vertical_align: string;
  word_break: string;
  word_wrap: string;
  white_space: string;
  font_size: string;
}
