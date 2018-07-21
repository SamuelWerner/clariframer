/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Button extends HTMLObjekt {

  type: string;
  value: string;
  autofocus: boolean;
  disabled: string;
  form: string;
  name: string;
  formaction: string;
  formenctype: string;
  formmethod: string;
  formnovalidate: string;
  formtarget: string;


  constructor(weite, hoehe) {
    super();
    this.tagName = 'button';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#888';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
