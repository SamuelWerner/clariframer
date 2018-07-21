import {TweenMax} from 'gsap';
import {TimelineMax} from 'gsap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*
*   Diese Component verwaltet die Animationen auf dem Dashboard.
*
*   @author Florian Andreas Schaefer  <florian.andreas.schaefer@iem.thm.de>
*/
export class DashboardAnimations {


    // Methode um das zu Löschende Objekt unsichtbar werden zu lassen, bevor es gelöscht wird.
    public static animiereLoeschendesObjekt() {

        const elementId = document.getElementsByClassName('selected');
        const JelementId = JSON.stringify(document.getElementsByClassName('selected'));
        const buttonclass = JSON.stringify(document.getElementsByClassName('button selected'));

        // JSON Stringify um zu überprüfen ob das ausgewählte Objekt aus der Toolbox stammt.

        if (JelementId !== buttonclass) {

            TweenMax.to(elementId, 0.5, {
                opacity: 0,
            });
        }
    }

    public static animiereBeiKlickDrag(elementId) {

        TweenMax.to(elementId, 0.1, {
                css: {
                    boxShadow: '8px 8px 8px 8px rgba(0,0,0,0.50)',
                },

                yoyo: false
            },
        );


    }

    public static animiereBeiKlickDrop(elementId) {

        TweenMax.to(elementId, 0.2, {
            css: {
                boxShadow: '0px 0px 0px 0px'
            }
        });
    }
}

