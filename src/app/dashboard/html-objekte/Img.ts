/**
 * Created by Samuel Werner on 05.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Img extends HTMLObjekt {

  // https://www.w3schools.com/tags/tag_img.asp
  src: string;
  alt: string;
  crossorigin: string;
  height: string;
  ismap: string;
  longdesc: string;
  sizes: string;
  srcset: string;
  usemap: string;
  width: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'img';
    this.width = weite;
    this.height = hoehe;
    this.background_color = 'black';
    this.position = 'absolute';
    this.innererText = '';
    this.src = './assets/images/Logo.jpg';
    this.innereHTMLObjekte = [];
  }
}
