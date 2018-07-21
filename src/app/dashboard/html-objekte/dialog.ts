import {HTMLObjekt} from './HTMLObjekt';

export class Dialog extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'dialog';
    this.background_color = '';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'This is an open dialog window';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.inDiesesObjektKannGedropptWerden = false;
  }

}
