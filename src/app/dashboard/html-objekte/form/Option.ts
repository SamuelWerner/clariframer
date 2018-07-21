/**
 * Created by Philipp Geier und Samuel Werner
 */
import {HTMLObjekt} from "../HTMLObjekt";

export class Option extends HTMLObjekt{

  constructor(weite, hoehe) {
    super();
    this.tagName = 'option';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#aaa';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }
}
