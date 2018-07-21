import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AufloesungService} from '../../aufloesung.service';
import {HTMLObjekt} from '../html-objekte/HTMLObjekt';
import {GridObjekteService} from '../grid-objekte.service';
import {HtmlObjektService} from '../html-objekt.service';
import {DashboardSettingsService} from '../dashboard-settings.service';
import {settings} from '../settings';
/*
*   Diese Klasse erstellt das Grid des Dahsboards.
*   Mithilfe des Auflösungsservice wird das Grid dynamisch an die Auflösung angepasst.
*
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*   @author Sabrina Adam <sabrina.adam@iem.thm.de>
*/

/*  Draggable von GreenSock wird in der Clariframer/src/index.html global eingebunden.
*   Die Draggable Variable ermöglicht es uns von TypeScript aus auf eine Javascript
*   Bibliothek zuzugreifen. Dabei muss die Variable den Namen einer Klasse in der Bibliothek besitzen.
*   In diesem Fall nutzen wir also die gleichlautende Klasse aus der GreenSock Bibliothek.
*/


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
    @ViewChild('grid') grid: ElementRef;
    @ViewChild('gridWrapper') gridWrapper: ElementRef;
    public ausgewaehltesObjekt: HTMLObjekt;
    public linealTeil = this.aufloesungService.getAufloesung().weiteAufteilungLineal;
    public linealUnterteilung = this.aufloesungService.getAufloesung().weiteAufteilungLineal / 10;
    public gridLinieBreit = this.aufloesungService.getAufloesung().gridBorderBreit;
    public gridLinieFein = this.aufloesungService.getAufloesung().gridBorderFein;
    public styles;
    private settings: settings;
    public gridFarbe;

    constructor(private aufloesungService: AufloesungService, // Auflösung des Bildschirms ermitteln
                private renderer: Renderer2, // Wird zur DOM-Manipulation benötigt
                private htmlObjektService: HtmlObjektService,
                private gridObjekteService: GridObjekteService,
                private dashboardSettingsService: DashboardSettingsService) {
        // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
        this.htmlObjektService.myMethod$.subscribe((data) => {
                this.ausgewaehltesObjekt = data;
            }
        );
        // An dem DashboardSettings Service anmelden und über Änderungen informiert werden
        this.dashboardSettingsService.myMethod$.subscribe((data) => {
                this.settings = data;
                this.gridCSSerstellen();
            }
        );
    }

    ngOnInit() {
        this.gridCSSerstellen();
        // Abstand zu den Linealen je nach Auflösung
        this.renderer.addClass(this.gridWrapper.nativeElement,
            'dropzoneDashboard' + this.aufloesungService.getAufloesung().bezeichnung);
        this.gridCSSerstellen();
    }

    public htmlElementEinfuegen(event: MouseEvent, targetID: string): void {
        if (this.testenObObjektAufDemGridEingefuegtWerdenDarf(targetID)) {
            const neuesInneresObjekt = Object.assign([], this.ausgewaehltesObjekt.innereHTMLObjekte);
            const neuesObjekt = Object.assign(new HTMLObjekt(), this.ausgewaehltesObjekt); // Deep Copy
            neuesObjekt.innereHTMLObjekte = neuesInneresObjekt;
            neuesObjekt.position_x = Math.round(event.layerX / this.linealUnterteilung) * this.linealUnterteilung + 'px';
            neuesObjekt.position_y = Math.round(event.layerY / this.linealUnterteilung) * this.linealUnterteilung + 'px';
            neuesObjekt.liegtAufDemGrid = true;
            this.gridObjekteService.htmlObjektHinzufuegen(neuesObjekt);
        }
    }

    private testenObObjektAufDemGridEingefuegtWerdenDarf(targetID: string): boolean {
        if (null != this.ausgewaehltesObjekt) {
            // Element darf nur auf der dropzone eingefuegt werden
            if ((targetID === 'dropzoneDashboard')) {
                // Verhindern das Elemente von Grid wieder in das Grid eingefügt werden können
                if (!this.ausgewaehltesObjekt.liegtAufDemGrid) {
                    return true;
                }
            }
        }
        return false;
    }


  private gridCSSerstellen() {

      if (this.settings.zeigeGrid && this.settings.gridFarbe !== 'white') {
          this.gridFarbe = this.settings.gridFarbe;
      } else if (this.settings.zeigeGrid && this.settings.gridFarbe === 'white') {
          this.gridFarbe = '#d8d8d8';
      } else {
          this.gridFarbe = 'white';
      }

      this.styles = { // Style des Grids
          'margin': '0px auto',
          'width': '100vw',
          'height': '100vh',
          'background-color': 'white',
          'background-image': 'linear-gradient(' + this.gridFarbe + ' ' + this.gridLinieBreit + 'px, transparent 2px),' +
          'linear-gradient(90deg,' + this.gridFarbe + ' ' + this.gridLinieBreit + 'px, transparent 2px),' +
          'linear-gradient(' + this.gridFarbe + ' ' + this.gridLinieFein + 'px, transparent 1px),' +
          'linear-gradient(90deg,' + this.gridFarbe + ' ' + this.gridLinieFein + 'px, transparent 1px)',
          'background-size':
          this.linealTeil + 'px ' + this.linealTeil + 'px, ' +
          this.linealTeil + 'px ' + this.linealTeil + 'px, ' +
          this.linealUnterteilung + 'px ' + this.linealUnterteilung + 'px, ' +
          this.linealUnterteilung + 'px ' + this.linealUnterteilung + 'px'
      };


  }
}
