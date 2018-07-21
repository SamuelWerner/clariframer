import {HTMLObjekt} from './HTMLObjekt';

export class Bdo extends HTMLObjekt {

  dir: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'bdo';
    this.background_color = '';
    this.width = weite;
    this.height = hoehe;
    this.dir = 'rtl';
    this.innererText = 'This text will go right-to-left.';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
