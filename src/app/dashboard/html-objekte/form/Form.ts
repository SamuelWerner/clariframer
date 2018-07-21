/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Form extends HTMLObjekt {

  action: string;
  method: string;
  accept_charset: string;
  autocomplete: string;
  enctype: string;
  name: string;
  novalidate: string;
  target: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'form';
    this.width = weite;
    this.height = hoehe;
    this.background_color = 'white';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
