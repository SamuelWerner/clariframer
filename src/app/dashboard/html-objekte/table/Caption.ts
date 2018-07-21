/**
 * Created by Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Caption extends HTMLObjekt {

  // Keine speziellen Attribute

  constructor() {
    super();
    this.tagName = 'caption';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.innererText = 'Tabellen Überschrift';
    this.liegtAufDemGrid = true;
    this.background_color = '#eee';
  }
}
