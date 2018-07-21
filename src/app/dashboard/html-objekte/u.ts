import {HTMLObjekt} from './HTMLObjekt';

export class U extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'u';
    this.background_color = '';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'underline';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
