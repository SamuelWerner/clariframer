import {HTMLObjekt} from './HTMLObjekt';

export class Samp extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'samp';
    this.background_color = 'white';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'This is a sample output from a computer program';
    this.position = 'absolute';
    this.font_family = 'monospace';
    this.inDiesesObjektKannGedropptWerden = false;
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
