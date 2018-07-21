/**
 * Created by Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Tfoot extends HTMLObjekt {

  // Keine speziellen Attribute

  constructor() {
    super();
    this.tagName = 'tfoot';
    this.background_color = '#555';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.innererText = '';
  }
}
