/**
 * Created by Bastian Ullrich
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Meter extends HTMLObjekt {

  high: string;
  low: string;
  optimum: string;
  min: string;
  max: string;
  value: string;

  constructor(weite, hoehe) {
    super();
    this.tagName = 'meter';
    this.width = weite;
    this.height = hoehe;
    this.background_color = '#eeeeee';
    this.position = 'absolute';
    this.innererText = '60%';
    this.font_style = '';
    this.high = '1';
    this.low = '0.1';
    this.optimum = '0.9';
    this.min = '0';
    this.max = '1';
    this.value = '0.6';
    this.inDiesesObjektKannGedropptWerden = false;
  }
}
