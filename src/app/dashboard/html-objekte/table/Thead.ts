/**
 * Created by Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Thead extends HTMLObjekt {

  // Keine speziellen Attribute

  constructor() {
    super();
    this.tagName = 'thead';
    this.background_color = '#333333';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.innererText = '';
  }
}
