/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Progress extends HTMLObjekt {

  max: number;
  value: number;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'progress';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eeeeee';
    this.position = 'absolute';
    this.font_style = '';
    this.max = 100;
    this.value = 25;
    this.inDiesesObjektKannGedropptWerden = false;
  }
}
