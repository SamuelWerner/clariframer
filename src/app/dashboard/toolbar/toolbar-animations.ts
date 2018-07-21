/**
 * Created by Bastian Ullrich
 */

import {TweenMax} from 'gsap';
import {TimelineMax} from 'gsap';
import {SlowMo} from 'gsap';

export class ToolbarAnimations {

  // Methode zum Animieren des Button-Klicks
  public static animiereButtonKlick(element) {
    const erzeuger = element + 'Erzeuger';
    const elementId = document.getElementById(erzeuger);
    TweenMax.from(elementId, 0.2, {
      scale: 0.5,
      opacity: 0.5,
    });
  }

  // Methode zum Animieren des Mülleimers
  public static animiereMuelleimer() {
    const tl = new TimelineMax();
    const elementId = document.getElementById('trashCan');

    for (let i = 0; i < 2; i++) {
      tl.add(TweenMax.to(elementId, 0.1, {
          rotation: 30,
          transformOrigin: '50 50',
          repeat: 1,
          yoyo: true,
        }
        )
      );
      tl.add(TweenMax.to(elementId, 0.1, {
        rotation: -30,
        transformOrigin: '50 50',
        repeat: 1,
        yoyo: true
      }));
    }
  }

  // Methode zum Animieren des Speicher-Buttons
  public static animiereSpeicherButton() {
    const animation = new TimelineMax();
    const id = document.getElementById('saveButton');
    animation.to(id, 0.25 , {css: {opacity: '0.5', scale: '0.5'}, ease: SlowMo.ease});
    animation.from(id, 0.25 , {css: {opacity: '1.0', scale: '0.5', backgroundColor: '#00C4FF'}, ease: SlowMo.ease});
  }
}
