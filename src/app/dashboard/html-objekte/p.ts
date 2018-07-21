/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './HTMLObjekt';

export class P extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'p';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eeeeee';
    this.position = 'absolute';
    this.innererText = 'p';
    this.font_style = '';
    this.inDiesesObjektKannGedropptWerden = true;
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
