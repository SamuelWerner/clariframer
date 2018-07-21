/**
 * Created by Samuel Werner on 05.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Area extends HTMLObjekt {

  alt: string;
  coords: string;
  download: boolean;
  href: string;
  hreflang: string;
  media: string;
  rel: string;
  shape: string;
  target: string;
  type: string;


  constructor(weite, hoehe) {
    super();
    this.tagName = 'area';
    this.width = weite;
    this.height = hoehe;
    this.background_color = 'transparent';
    this.border = '1px solid red';
    this.position = 'static';
    this.innererText = '';
    this.inDiesesObjektKannGedropptWerden = false;
    this.innereHTMLObjekte = [];
  }
}
