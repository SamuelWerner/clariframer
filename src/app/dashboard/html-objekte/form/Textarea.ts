/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Textarea extends HTMLObjekt {

  rows: number;
  cols: number;
  autofocus: string;
  dirname: string;
  disabled: string;
  form: string;
  maxlength: string;
  name: string;
  placeholder: string;
  readonly: string;
  required: string;
  wrap: string;

  constructor() {
    super();
    this.tagName = 'textarea';
    this.background_color = '';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
