/**
 * Created by Bastian Ullrich <bastian.ullrich@iem.thm.de> on 05/30/2018
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Tr extends HTMLObjekt {

  // Keine speziellen Attribute

  constructor(weite, hoehe) {
    super();
    this.tagName = 'tr';
    this.width = weite;
    this.height = hoehe;
    this.background_color = 'black';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.innererText = '';
  }
}
