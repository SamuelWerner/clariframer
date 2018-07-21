import {HTMLObjekt} from './HTMLObjekt';

export class Q extends HTMLObjekt {

  cite: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'q';
    this.background_color = '';
    this.width = weite;
    this.height = hoehe;
    this.cite = 'https://www.thm.de/';
    this.innererText = 'Web- und mobile Anwendungen – aus unserem Alltag nicht mehr wegzudenken';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
  }

}
