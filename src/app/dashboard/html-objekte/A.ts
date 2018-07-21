import {HTMLObjekt} from './HTMLObjekt';

export class A extends HTMLObjekt {

  href: string;
  target: string;
  istEinInternerLink: boolean;
  internerLinkAdresse: string;
  download: string;
  hreflang: string;
  media: string;
  ping: string;
  rel: string;
  type: string;

  constructor(weite, hoehe) {
    super();
    this.istEinInternerLink = false;
    this.tagName = 'a';
    this.background_color = '';
    this.width = weite;
    this.height = hoehe;
    this.innererText = 'Ich bin ein Link!';
    this.position = 'absolute';
    this.innereHTMLObjekte = new Array<HTMLObjekt>();
    this.href = 'https://www.thm.de/site/';
  }

}
