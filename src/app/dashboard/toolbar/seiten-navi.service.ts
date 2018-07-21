import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeitenNaviService {

  public navMenue = false;
  public seitenListe: Array<string>;
  public menuePunkt: string;
  public ausgewaehlterButton: string;

  constructor() {
  }

  zeigeNavMenue() {
    this.navMenue = true;
  }

  entferneNavMenue() {
    this.navMenue = false;
  }
}
