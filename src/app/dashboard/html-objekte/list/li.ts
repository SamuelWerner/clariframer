/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Li extends HTMLObjekt {

  value: number;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'li';
    this.innererText = 'li';
    this.width = weite;
    this.height = hoehe;
    this.font_style = '';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
