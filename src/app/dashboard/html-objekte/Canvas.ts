/**
 * Created by Samuel Werner on 05.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Canvas extends HTMLObjekt {
  constructor(weite, hoehe) {
    super();
    this.tagName = 'canvas';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eee';
    this.position = 'absolute';
    this.innererText = '';
    this.inDiesesObjektKannGedropptWerden = false;
  }
}
