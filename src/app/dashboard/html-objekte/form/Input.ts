/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Input extends HTMLObjekt {

  required: boolean;
  pattern: string;
  type: string;
  name: string;
  value: string;
  accept: string;
  alt: string;
  autocomplete: string;
  autofocus: string;
  checked: boolean;
  dirname: string;
  disabled: string;
  form: string;
  formaction: string;
  formenctype: string;
  formnovalidate: string;
  formtarget: string;
  height: string;
  list: string;
  max: string;
  maxlength: string;
  min: string;
  multiple: string;
  placeholder: string;
  readonly: string;
  size: number;
  src: string;
  step: number;
  width: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'input';
    this.width = weite;
    this.height = hoehe;
    this.innererText = '';
    this.background_color = '#EEE';
    this.innereHTMLObjekte = [];
    this.size = 20;
    this.value = 'input';
  }

}
