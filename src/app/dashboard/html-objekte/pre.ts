/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Pre extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'pre';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eeeeee';
    this.position = 'absolute';
    this.innererText = 'Text in a pre element';
    this.font_style = '';
    this.display = 'block';
    this.font_family = 'monospace';
    this.white_space = 'pre';
    this.margin = '1em 0';
  }
}
