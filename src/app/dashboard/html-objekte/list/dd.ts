/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './../HTMLObjekt';

export class Dd extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'dd';
    this.innererText = 'dd';
    this.font_style = '';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
