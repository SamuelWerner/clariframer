/**
 * Created by Sabrina Adam<sabrina.adam@iem.thm.de>  on 01.07.2018
 */
import {HTMLObjekt} from './HTMLObjekt';

export class Video extends HTMLObjekt {

    src: string;
    autoplay: string;
    controls: string;
    loop: string;
    muted: string;
    poster: string;
    preload: string;


    constructor(weite, hoehe) {
        super();
        this.tagName = 'video';
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
        this.src = 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';
        this.controls = 'true';
    }

}
