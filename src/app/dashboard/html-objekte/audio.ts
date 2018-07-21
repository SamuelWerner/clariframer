/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 01.07.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Audio extends HTMLObjekt {
    public src: string;
    public autoplay: string;
    public controls: string;
    public loop: string;
    public muted: string;
    public preload: string;

    constructor(weite, hoehe) {
        super();
        this.tagName = 'audio';
        this.width = weite;
        this.height = hoehe;
        this.background_color = 'transparent';
        this.border = '';
        this.border_color = 'black';
        this.position = 'absolute';
        this.innererText = 'Wird nicht unterstützt';
        this.font_style = '';
        this.inDiesesObjektKannGedropptWerden = false;
        this.src = 'http://www.google.com/logos/fnbx/animal_sounds/turkey.mp3';
        this.controls = 'true';
    }

}
