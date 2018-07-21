/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Select extends HTMLObjekt {

  name: string;
  size: string;
  multiple: boolean;
  anzahlOptionen: number;
  anzahlOptGroups: number;
  autofocus: string;
  disabled: string;
  form: string;
  required: string;

  constructor(weite, hoehe) {
    super();
    this.anzahlOptionen = 0;
    this.tagName = 'select';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eee';
    this.innereHTMLObjekte = [];
    this.anzahlOptGroups = 0;
  }
}
