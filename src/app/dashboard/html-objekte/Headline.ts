/**
 * Created by Sabrina Adam <samuel.werner@iem.thm.de>  on 11.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Headline extends HTMLObjekt {

    constructor(weite, hoehe) {
        super();
        this.tagName = 'h1';
        this.width = weite;
        this.height = hoehe;
        this.background_color = '#ff0000';
        this.border = '0.1rem solid';
        this.border_color = 'black';
        this.position = 'absolute';
        this.innererText = 'Ich bin eine h1 Headline';
        this.font_style = '';
        this.inDiesesObjektKannGedropptWerden = false;
    }
}