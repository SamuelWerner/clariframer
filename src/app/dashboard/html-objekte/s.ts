import {HTMLObjekt} from './HTMLObjekt';

export class S extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 's';
    this.background_color = '';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'strikethrough';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
