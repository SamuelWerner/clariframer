/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './../HTMLObjekt';

export class Summary extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'summary';
    this.innererText = 'ClariFramer - Since 2018';
    this.display = 'block';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
