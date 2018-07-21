/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 13.06.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Body extends HTMLObjekt {
    // der Bodytag muss wegen seines verhaltens und seiner einzigartigkeit noch speziell angepasst werden
    // da er aktuell Probleme bei der platzierung macht.
    constructor(weite, hoehe) {
        super();
        this.tagName = 'body';
        this.width = weite;
        this.height = hoehe;
        this.background_color = '#ff0000';
        this.border = '';
        this.border_color = 'black';
        this.position = 'static';
        this.innererText = '';
        this.font_style = '';
        this.inDiesesObjektKannGedropptWerden = true;
        this.innereHTMLObjekte = [];
    }

}