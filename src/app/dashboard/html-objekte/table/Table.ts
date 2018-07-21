/**
 * Created by Philipp Geier, edited by Bastian Ullrich
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Table extends HTMLObjekt {

  anzahlZeilen: number;
  anzahlSpalten: number;
  // Sonst keine weiteren speziellen Attribute

  constructor(weite, hoehe) {
    super();
    this.tagName = 'table';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#FFFFFF';
    this.position = 'absolute';
    this.border = '0.7rem solid';
    this.border_color = '#b5b5b5';
    this.innererText = '';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.anzahlZeilen = 0;
    this.anzahlSpalten = 0;
  }
}
