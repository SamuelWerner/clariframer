/**
 * Created by Samuel Werner on 05.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Picture extends HTMLObjekt {
  constructor(weite, hoehe) {
    super();
    this.tagName = 'picture';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eee';
    this.position = 'absolute';
    this.innererText = 'In dieses Element img droppen';
    this.inDiesesObjektKannGedropptWerden = true;
    this.innereHTMLObjekte = [];
  }
}
