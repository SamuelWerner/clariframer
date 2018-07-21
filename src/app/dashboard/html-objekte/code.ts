import {HTMLObjekt} from './HTMLObjekt';

export class Code extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'code';
    this.background_color = 'white';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'This is a piece of computer code';
    this.position = 'absolute';
    this.font_family = 'monospace';
    this.inDiesesObjektKannGedropptWerden = false;
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
