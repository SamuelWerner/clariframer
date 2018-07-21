/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Address extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'address';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eeeeee';
    this.position = 'absolute';
    this.innererText = 'Technische Hochschule Mittelhessen';
    this.font_style = 'italic';
    this.display = 'block';
  }
}
