/**
 * Created by Samuel Werner on 05.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Figure extends HTMLObjekt {
  constructor(weite, hoehe) {
    super();
    this.tagName = 'figure';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eee';
    this.position = 'absolute';
    this.innererText = '';
    this.inDiesesObjektKannGedropptWerden = true;
    this.innereHTMLObjekte = [];
  }
}
