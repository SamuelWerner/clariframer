/**
 * Created by Samuel Werner on 05.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Figcaption extends HTMLObjekt {
  constructor(weite, hoehe) {
    super();
    this.tagName = 'figcaption';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eee';
    this.position = 'static';
    this.innererText = 'In dieses Element img droppen';
    this.inDiesesObjektKannGedropptWerden = false;
    this.innereHTMLObjekte = [];
  }
}
