/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './../HTMLObjekt';

export class Details extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'details';
    this.width = weite;
    this.height = hoehe;
    this.background_color = 'white';
    this.innererText = '';
    this.font_style = '';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
