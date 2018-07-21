import {HTMLObjekt} from './HTMLObjekt';

export class Kbd extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'kbd';
    this.background_color = 'white';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'This is a keyboard input';
    this.position = 'absolute';
    this.font_family = 'monospace';
    this.inDiesesObjektKannGedropptWerden = false;
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
