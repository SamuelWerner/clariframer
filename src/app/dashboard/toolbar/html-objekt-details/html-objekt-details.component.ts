import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {HTMLObjekt} from '../../html-objekte/HTMLObjekt';
import {HtmlObjektService} from '../../html-objekt.service';
import {GridObjekteService} from '../../grid-objekte.service';
import {SeitenNaviService} from '../seiten-navi.service';
import {settings} from '../../settings';
import {DashboardSettingsService} from '../../dashboard-settings.service';
import {ToolbarAnimations} from '../toolbar-animations';
import {DashboardAnimations} from '../../dashboard-animations';

/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de>  on 21.05.2018
 * Edited by Sabrina Adam <sabrina.adam@iem.thm.de>  on 07.06.2018
 * Edited by Bastian Ullrich <bastian.ullrich@iem.thm.de>  on 12.06.2018
 */

@Component({
  selector: 'app-html-objekt-details',
  templateUrl: './html-objekt-details.component.html',
  styleUrls: ['./html-objekt-details.component.css']
})
export class HTMLObjektDetailsComponent implements OnInit {
  @ViewChild('grid', {read: ViewContainerRef}) gridComponentHost;

  public ausgewaehltesObjekt: HTMLObjekt;
  public zeigeMenue: Boolean;

  /*########################### Variablen für Dashboard Einstellungen##################################*/
  public ausgewaehlteSnapWeite = 0;
  public snapWeiteOptionen = [
    {id: 0, name: 'pixelgenau', viewValue: 'Pixelgenau'},
    {id: 1, name: 'gridklein', viewValue: 'Grid klein'},
    {id: 2, name: 'gridgroß', viewValue: 'Grid groß'},

  ];
  gridAnzeigen = true;
  gridFarbe = '#d8d8d8';

  constructor(private htmlObjektService: HtmlObjektService,
              public gridObjekteService: GridObjekteService,
              public seitenNavService: SeitenNaviService,
              private componentFactoryResolver: ComponentFactoryResolver,
              public dashboardSettingsService: DashboardSettingsService) {
    this.zeigeMenue = false;
    this.seitenNavService.seitenListe = [];
    // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
    this.htmlObjektService.myMethod$.subscribe((data) => {
        this.ausgewaehltesObjekt = data;
      }
    );
  }

  ngOnInit() {
    this.OptionenVerteilen();
    if (localStorage.getItem('seitenListe') === null) {
      this.ertselleHomepage();
    } else {
      this.ladeSeitenListe();
    }
  }


  /*
    ** Der Timeout in der Funktion htmlObjektLoeschen sorgt dafür, dass erst die
    ** Animation zu ende läuft und anschließend erst das Objekt vom Dashboard gelöscht wird. Wird die Animation verändert
    ** in der Laufzeit, so muss dies auch in dem setTimeout angepasst werden.
    */

  htmlObjektLoeschen() {
    ToolbarAnimations.animiereMuelleimer();
    DashboardAnimations.animiereLoeschendesObjekt();
    setTimeout(() => {
      this.gridObjekteService.einzelnesHtmlObjektLoeschen(this.ausgewaehltesObjekt);
      this.htmlObjektService.htmlObjektVerteilen(null);
    }, 500);
  }

  positionAllerObjekteAufDemGridVeraendern(position: string, widthAusschalten) {
    ToolbarAnimations.animiereButtonKlick(position);
    this.gridObjekteService.positionAllerObjekteAufDemGridVeraendern(position, widthAusschalten);
  }

  /*
  * Wird als (ngModelChange) Event aufgerufen um bei jeder Änderung der Einstellungen diese an die jeweilig
  * betroffende Komponente die sich am Service angemeldet hat zu verteilen.
  * */

  OptionenVerteilen() {
    const set = new settings();
    set.snapWeite = this.ausgewaehlteSnapWeite;
    set.zeigeGrid = this.gridAnzeigen;
    set.gridFarbe = this.gridFarbe;
    this.dashboardSettingsService.settingsVerteilen(set);

  }

  speicherSeite() {
    ToolbarAnimations.animiereSpeicherButton();
    const aktuelleSeite = this.gridObjekteService.holeAktuelleSeitenId();
    this.gridObjekteService.abspeichern(aktuelleSeite);
  }

  zeigeObjektDetails(menuePunkt) {
      this.seitenNavService.menuePunkt = menuePunkt;
  }

  public aufValueAenderungenImToggleButtonMenueReagieren(val: string) {
    this.seitenNavService.ausgewaehlterButton = val;
  }

  // Methoden für die Mehrseitigkeit sind hier !!! @created by Yavuz Bulunmaz --------------------------------------------
  // Homepage als Default Element ngOnInit erstellt
  ertselleHomepage() {
    this.gridObjekteService.setzeAktuelleSeitenId('homepage');
    this.gridObjekteService.abspeichern('homepage');
    this.neueSeiteInListe();
    this.speichereAktuelleIdImLC();
  }

  // Klick-Event, wobei die Seite gewechselt wird
  ladeSeite(neueId: string): any {
    const zurzeitVerwendeteId = this.gridObjekteService.holeAktuelleSeitenId();
    this.gridObjekteService.abspeichern(zurzeitVerwendeteId);
    this.gridObjekteService.setzeAktuelleSeitenId(neueId);
    this.speichereAktuelleIdImLC();
    window.location.reload();
  }

  erstelleSeite() {
    const inputId = (<HTMLInputElement>document.getElementById('seitenName')).value;
    const istValide: boolean = this.validiereInput();
    if (istValide === true) {
      this.gridObjekteService.setzeAktuelleSeitenId(inputId);
      this.gridObjekteService.htmlObjekteLoeschen();
      this.gridObjekteService.abspeichern(inputId);
      this.neueSeiteInListe();
      this.speichereAktuelleIdImLC();
    }
  }

  // test auf valide Eingabe im Input, bestimmt ob die erstellung der Seite abgebrochen oder fortgeführt wird
  validiereInput(): boolean {
    const inputId = (<HTMLInputElement>document.getElementById('seitenName')).value;
    let istValide: boolean;

    // testet ob der eingegebene Wert leer/null ist
    // wenn ja gibt es ein false zurück und die erstellung der Seite wird abgebrochen
    if (inputId === null || inputId === '') {
      istValide = false;
    } else {
      // testet hier ob der eingegebene Wert schon für eine Seite benutzt wurde
      // wenn ja wird auch hier die erstellung der Seite abgebrochen
      for (let i = 0; i < this.seitenNavService.seitenListe.length; i++) {
        if (inputId === this.seitenNavService.seitenListe[i]) {
          istValide = false;
        } else {
          // Input Eingabe ist valide und die Seite kann erstellt werden
          istValide = true;
        }
      }
    }
    return istValide;
  }

  // speichert Array im localStorage ab um es onInit wieder erstellen zu können
  neueSeiteInListe() {
    this.seitenNavService.seitenListe.push(this.gridObjekteService.holeAktuelleSeitenId());
    this.speicherArrayInLocalStorage();
  }

  speicherArrayInLocalStorage() {
    localStorage.setItem('seitenListe', JSON.stringify(this.seitenNavService.seitenListe));
  }

  loescheSeitePasseSeitenListeAnLadeHomepage(gewaehlteSeite: string) {
    // es wird im Array nach der Stelle gesucht in der der Seitenname drin ist, dieser wird dann aus dem Array rausgeschnitten
    for (let i = 0; i < this.seitenNavService.seitenListe.length; i++) {
      if (gewaehlteSeite === this.seitenNavService.seitenListe[i]) {
        const index: number = this.seitenNavService.seitenListe.indexOf(gewaehlteSeite);
        if (index !== -1) {
          this.seitenNavService.seitenListe.splice(index, 1);
        }
        localStorage.removeItem(gewaehlteSeite);
        this.speicherArrayInLocalStorage();
        // Wenn die aktuelle Seite gelöscht werden soll, wird die homepage Seite geladen
        if (this.gridObjekteService.holeAktuelleSeitenId() === gewaehlteSeite) {
          this.gridObjekteService.setzeAktuelleSeitenId('homepage');
          this.speichereAktuelleIdImLC();
          window.location.reload();
        }
      }
    }
  }

  // wird onInit das Array mit dem gespeicherten Inhalt befüllen
  ladeSeitenListe() {
    const liste = localStorage.getItem('seitenListe');
    this.seitenNavService.seitenListe = JSON.parse(liste);
  }

  // Die aktuelleId soll onInit dem Service übergeben werden, da er sonst nicht gespeichert wird
  speichereAktuelleIdImLC() {
    localStorage.setItem('aktuelleSeitenId', this.gridObjekteService.holeAktuelleSeitenId());
  }

  schliesseSeitenverwaltung() {
    this.seitenNavService.entferneNavMenue();
  }
}
