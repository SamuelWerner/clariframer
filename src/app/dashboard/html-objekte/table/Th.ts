/**
 * Created by Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Th extends HTMLObjekt {

  colspan: number;
  headers: string;
  rowspan: number;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'th';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#aaa';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.innererText = '';
  }
}
