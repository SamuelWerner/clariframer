import {HTMLObjekt} from './HTMLObjekt';

export class Em extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'em';
    this.background_color = '';
    this.width = weite;
    this.height = hoehe;
    this.font_style = 'italic';
    this.innererText = 'emphasized';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
