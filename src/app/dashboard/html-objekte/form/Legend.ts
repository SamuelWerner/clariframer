/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Legend extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'legend';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
