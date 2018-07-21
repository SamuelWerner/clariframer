/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Output extends HTMLObjekt {

  for: string;
  form: string;
  name: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'output';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '';
    this.innereHTMLObjekte = [];
  }
}
