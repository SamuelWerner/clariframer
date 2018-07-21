/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Td extends HTMLObjekt {

  colspan: number;
  headers: string;
  rowspan: number;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'td';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#ccc';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.innererText = '';
    this.inDiesesObjektKannGedropptWerden = true;
  }
}
