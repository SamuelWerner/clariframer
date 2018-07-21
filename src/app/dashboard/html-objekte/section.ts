/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Section extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'section';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eeeeee';
    this.position = 'absolute';
    this.innererText = '';
    this.font_style = '';
    this.inDiesesObjektKannGedropptWerden = true;
  }
}
