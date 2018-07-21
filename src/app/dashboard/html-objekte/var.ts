import {HTMLObjekt} from './HTMLObjekt';

export class Var extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'var';
    this.background_color = 'white';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'This is a variable';
    this.position = 'absolute';
    this.font_family = 'italic';
    this.inDiesesObjektKannGedropptWerden = false;
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
