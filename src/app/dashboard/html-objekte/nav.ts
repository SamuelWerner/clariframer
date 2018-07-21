/**
 * Created by Bastian Ullrich
 */

import {HTMLObjekt} from './HTMLObjekt';

export class Nav extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'nav';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#ffffff';
    this.position = 'relative';
    this.font_style = '';
    this.padding = '1em 0em 0em 2em';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
