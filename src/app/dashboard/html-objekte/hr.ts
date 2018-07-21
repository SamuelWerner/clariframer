import {HTMLObjekt} from './HTMLObjekt';

export class Hr extends HTMLObjekt {

  constructor(weite, hoehe) {
    super();
    this.tagName = 'hr';
    this.background_color = 'black';
    this.width = weite;
    this.height = hoehe;
    this.position = 'absolute';
    this.display = 'block';
    this.margin = '0.5em auto';
    this.inDiesesObjektKannGedropptWerden = false;
  }

}
