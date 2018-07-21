/**
 * Created by Samuel Werner on 05.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Map extends HTMLObjekt {

  name: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'map';
    this.width = weite;
    this.height = hoehe;
    this.background_color = 'transparent';
    this.position = 'static';
    this.innererText = '';
    this.inDiesesObjektKannGedropptWerden = false;
    this.innereHTMLObjekte = [];
  }
}
