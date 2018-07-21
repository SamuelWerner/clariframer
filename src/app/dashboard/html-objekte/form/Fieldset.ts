/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Fieldset extends HTMLObjekt {

  disabled: boolean;
  form: string;
  name: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'fieldset';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#ddd';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
