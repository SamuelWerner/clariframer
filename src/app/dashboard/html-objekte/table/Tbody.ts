/**
 * Created by Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Tbody extends HTMLObjekt {

  // Keine speziellen Attribute

  constructor() {
    super();
    this.tagName = 'tbody';
    this.background_color = '#333333';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.innererText = '';
  }
}
