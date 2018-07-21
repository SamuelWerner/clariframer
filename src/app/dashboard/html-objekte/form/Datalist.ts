/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from '../HTMLObjekt';

export class Datalist extends HTMLObjekt {

  constructor() {
    super();
    this.tagName = 'datalist';
    this.innereHTMLObjekte = [];
  }
}
