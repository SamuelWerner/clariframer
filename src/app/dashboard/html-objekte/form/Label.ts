/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Label extends HTMLObjekt {

  for: string;
  form: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'label';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
