/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Optgroup extends HTMLObjekt {

  disabled: boolean;
  label: string;

  constructor() {
    super();
    this.tagName = 'optgroup';
    this.background_color = '#aaa';
    this.innereHTMLObjekte = [];
  }
}
