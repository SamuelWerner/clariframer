import {HTMLObjekt} from './HTMLObjekt';

export class Small extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'small';
    this.background_color = '';
    this.font_size = 'smaller';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'small';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
