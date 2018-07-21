import {Injectable} from '@angular/core';
import {BildschirmQHD} from './bildschirm-qhd.enum';
import {BildschirmHD} from './bildschirm-hd.enum';
import {BildschirmUHD} from './bildschirm-uhd.enum';

/*
*    Diese Klasse ermittelt die aktuelle Breite des Broswer und gibt
*    ein Enum zurück, welches Informationen zu der Auflösung bereit hält.
*
*    @author Samuel Werner <samuel.werner@iem.thm.de>
*/

@Injectable({
  providedIn: 'root'
})
export class AufloesungService {

  constructor() { }

  // Gibt die Auflösung anhand der Browser-Weite zurück
  // noinspection JSMethodCanBeStatic
  public getAufloesung() {
    const weiteBildschirm = window.innerWidth;
    if (weiteBildschirm < BildschirmQHD.maximaleWeite) {
      return BildschirmQHD;
    } else if (weiteBildschirm < BildschirmHD.maximaleWeite) {
      return BildschirmHD;
    } else if (weiteBildschirm < BildschirmUHD.maximaleWeite) {
      return BildschirmUHD;
    }
    return BildschirmUHD;
  }
}
