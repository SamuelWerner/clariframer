/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de>  on 21.05.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Span extends HTMLObjekt {

  // Keine speziellen Attribute

  constructor(weite, hoehe) {
    super();
    this.tagName = 'span';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#008000';
    this.border = '0.05rem solid';
    this.border_color = 'black';
    this.position = 'absolute';
    this.innererText = 'span';
    this.inDiesesObjektKannGedropptWerden = true;
  }
}
