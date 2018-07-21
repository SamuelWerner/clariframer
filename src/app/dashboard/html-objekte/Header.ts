/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 13.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Header extends HTMLObjekt {

    constructor(weite, hoehe) {
        super();
        this.tagName = 'header';
        this.width = weite;
        this.height = hoehe;
        this.background_color = '#ff0000';
        this.border = '';
        this.border_color = 'black';
        this.position = 'absolute';
        this.innererText = '';
        this.font_style = '';
        this.inDiesesObjektKannGedropptWerden = true;
        this.innereHTMLObjekte = [];
    }

}