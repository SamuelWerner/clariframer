/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Blockquote extends HTMLObjekt {

  cite: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'blockquote';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eeeeee';
    this.position = 'absolute';
    this.innererText = 'This is a Blockquote';
    this.font_style = '';
    this.cite = 'http://www.thm.de';
    this.inDiesesObjektKannGedropptWerden = false;
  }
}
