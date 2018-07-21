/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de>  on 21.05.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Div extends HTMLObjekt {

// Keine speziellen Attribute

  constructor(weite, hoehe) {
    super();
    this.tagName = 'div';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#ff0000';
    this.border = '0.05rem solid';
    this.border_color = 'black';
    this.position = 'absolute';
    this.innererText = '';
    this.font_style = '';
    this.inDiesesObjektKannGedropptWerden = true;
    this.innereHTMLObjekte = [];
  }
}
