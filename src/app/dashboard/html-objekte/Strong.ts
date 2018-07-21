import {HTMLObjekt} from './HTMLObjekt';

export class Strong extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'strong';
    this.background_color = '';
    this.font_weight = 'bold';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'strong';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
