/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Ol extends HTMLObjekt {

  public type: string;
  reversed: string;
  start: number;


  constructor(weite, hoehe) {
    super();
    this.tagName = 'ol';
    this.width = weite;
    this.height = hoehe;
    this.background_color = 'white';
    this.position = 'absolute';
    this.type = '';
    this.padding = '1em 0em 0em 3em';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.start = 1;
  }
}
