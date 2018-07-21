/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './../HTMLObjekt';

export class Ul extends HTMLObjekt {

  public type: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'ul';
    this.width = weite;
    this.height = hoehe;
    this.background_color = 'white';
    this.position = 'absolute';
    this.padding = '1em 0em 0em 2em';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
