/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './../HTMLObjekt';

export class Dt extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'dt';
    this.innererText = 'dt';
    this.font_style = '';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
