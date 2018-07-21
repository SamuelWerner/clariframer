import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {HTMLObjekt} from '../../html-objekte/HTMLObjekt';
import {AufloesungService} from '../../../aufloesung.service';
import {HtmlObjektService} from '../../html-objekt.service';
import {GridObjekteService} from '../../grid-objekte.service';
import {SeitenNaviService} from '../../toolbar/seiten-navi.service';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';

@Component({
  selector: '[app-html-elemente]',
  templateUrl: './html-elemente.component.html',
  styleUrls: ['./html-elemente.component.css'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'scale(0)', offset: 0}),
          style({opacity: 1, transform: 'scale(1)',     offset: 1.0})
        ]))
      ]),
      transition('* => change', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'scale(0)', offset: 0}),
          style({opacity: 1, transform: 'scale(1)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class HtmlElementeComponent implements OnInit {

  private getroffeneObjektID: string;
  public ausgewaehltesObjekt: HTMLObjekt;

  @Input() public htmlObjekte;
  @Input() public innerText;

  constructor(private aufloesungService: AufloesungService, // Auflösung des Bildschirms ermitteln
              private renderer: Renderer2, // Wird zur DOM-Manipulation benötigt
              private htmlObjektService: HtmlObjektService,
              private gridObjekteService: GridObjekteService,
              public seitenNavService: SeitenNaviService) {
    // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
    this.htmlObjektService.myMethod$.subscribe((data) => {
        this.ausgewaehltesObjekt = data;
      }
    );
  }

  ngOnInit() {
    if (this.htmlObjekte == null) {
      this.htmlObjekte = this.gridObjekteService.getGridHtmlObjekte();
    }
    this.seitenNavService.ausgewaehlterButton = 'attribute';
  }

  public animationBeendet(event) {
    this.gridObjekteService.animationZueruecksetzen();
  }

  public beiDragEndeGetroffenesObjektMarkieren(drag, dragHTMLObjekt: HTMLObjekt) {
    this.getroffeneObjektID = null;
    if (!isNaN(drag[0].endX) && !isNaN(drag[0].endY)) {
      const elementFromDocument = document.elementFromPoint(drag[0].endX + 11, drag[0].endY + 11);
      if (null != elementFromDocument && !isNaN(parseInt(elementFromDocument.id, 10))) {
        this.getroffeneObjektID = elementFromDocument.id;
      }
    }
  }

  private testenObInHTMLObjektGedropptWerdenDarf(htmlObjekt: HTMLObjekt): boolean {
    // Verhindern dass das Element in sich selbst gedroppt wird.
    if (this.ausgewaehltesObjekt.id === parseInt(this.getroffeneObjektID, 10)) {
      return false;
    }
    // Verhindern das Elemente in eigene Kind-Elemente eingefügt werden.
    if (this.istGetroffenesElementEinKindElement(parseInt(this.getroffeneObjektID, 10), this.ausgewaehltesObjekt.innereHTMLObjekte)) {
      return false;
    }
    // Es dürfen nur in Div, Span und TD Elemente eingefügt werden

    return htmlObjekt.inDiesesObjektKannGedropptWerden;
  }

  public beiDragEndePruefenObInObjektEinfuegenUndPositionSpeichern(drag: any) {
    if (null != drag[0]) {
      const varX = drag[0].endX;
      const varY = drag[0].endY;
      this.ausgewaehltesObjekt.position_x = varX + 'px';
      this.ausgewaehltesObjekt.position_y = varY + 'px';
      this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());

      // this.getroffeneObjektID wird ermittelt durch die Methode beiDragEndeGetroffenesObjektMarkieren()
      // beiDragEndeGetroffenesObjektMarkieren() wird wiederrum aufgerufen durch ein Event in html-elemente.component.html
      if (this.getroffeneObjektID != null) {
        const neuGeladenesGetroffenesObjekt = this.gridObjekteService.objektAnhandDerIDHolen(parseInt(this.getroffeneObjektID, 10));
        if (this.testenObInHTMLObjektGedropptWerdenDarf(neuGeladenesGetroffenesObjekt)) {
          this.inGetroffenesObjektEinfuegenUndAusGridLoeschen(neuGeladenesGetroffenesObjekt);
        }
      }
    }
  }

  private istGetroffenesElementEinKindElement(id: number, objekte: Array<HTMLObjekt>): boolean {
    if (null != objekte) {
      for (const htmlObjekt of objekte) {
        if (htmlObjekt.id === id) { // Doppeltes Gleich wichtig
          return true;
        } else if (htmlObjekt.innereHTMLObjekte != null && htmlObjekt.innereHTMLObjekte.length > 0) {
          const wurdeKindElementGefunden = this.istGetroffenesElementEinKindElement(id, htmlObjekt.innereHTMLObjekte);
          if (wurdeKindElementGefunden != null) {
            return (wurdeKindElementGefunden);
          }
        }
      }
    }
  }

  private inGetroffenesObjektEinfuegenUndAusGridLoeschen(neuGeladenesGetroffenesObjekt: HTMLObjekt) {
    // Kopie von ausgwählten Objekt erzeugen und dieses static machen, damit es dem natürlichen
    // Flow der Webseite innerhalb eines Elementes folgt.
    const kopwieVonAusgewaehltemHTMLObjekt = Object.assign(new HTMLObjekt(), this.ausgewaehltesObjekt);
    kopwieVonAusgewaehltemHTMLObjekt.position = 'static';

    // Kopie von den inneren Elementen erstellen und diesem das neueElement hinzufügen
    if (null != neuGeladenesGetroffenesObjekt) {
      const kopieVonInnerenObjekten: Array<HTMLObjekt> =
        (Object.assign([], neuGeladenesGetroffenesObjekt.innereHTMLObjekte));
      kopieVonInnerenObjekten.push(kopwieVonAusgewaehltemHTMLObjekt);
      neuGeladenesGetroffenesObjekt.innereHTMLObjekte = kopieVonInnerenObjekten;
      this.gridObjekteService.einzelnesHtmlObjektLoeschen(this.ausgewaehltesObjekt);
    }
    this.getroffeneObjektID = null;
  }

  public htmlElementAuswaehlen(event: MouseEvent, obj: HTMLObjekt): void {
    // Verhindern dass das darunter liegende Element ausgewählt wird.
    event.stopImmediatePropagation();
    // Ausgewähltes Objekt an alle angemeldeten Komponenten verteilen
    this.htmlObjektService.htmlObjektVerteilen(obj);
    if (this.seitenNavService.ausgewaehlterButton === 'attribute') {
      this.seitenNavService.menuePunkt = obj.tagName;
    }
  }

  public styleSheetFuerDasElementErzeugen(htmlObj: HTMLObjekt) {
    if (htmlObj.widthAusschalten || htmlObj.width === '' + 0) {
      return {
        // Allgemein
        'width': 'auto',
        'height': '' + htmlObj.height,
        'background-color': '' + htmlObj.background_color,
        'z-index': '' + htmlObj.z_index,
        'background': '' + htmlObj.background,
        'opacity': '' + htmlObj.opacity,
        'overflow': '' + htmlObj.overflow,
        'visibility': '' + htmlObj.visibility,

        // Text
        'font-style': '' + htmlObj.font_style,
        'font-weight': '' + htmlObj.font_weight,
        'color': '' + htmlObj.color,
        'font-family': '' + htmlObj.font_family,
        'text-align': '' + htmlObj.text_align,
        'word-break': '' + htmlObj.word_break,
        'word-wrap': '' + htmlObj.word_wrap,
        'white-space': '' + htmlObj.white_space,
        'font-size': '' + htmlObj.font_size,

        // Ausrichtung
        'position': '' + htmlObj.position,
        'left': '' + htmlObj.position_x,
        'top': '' + htmlObj.position_y,
        'margin': '' + htmlObj.margin,
        'transform': '' + htmlObj.transform,
        'display': '' + htmlObj.display,
        'float': '' + htmlObj.float,
        'clear': '' + htmlObj.clear,

        // Umrandung
        'border': '' + htmlObj.border,
        'padding': '' + htmlObj.padding,
        'border-color': '' + htmlObj.border_color,
        'border-radius': '' + htmlObj.border_radius,
        'border-style': '' + htmlObj.border_style,
        'outline': '' + htmlObj.outline
      };
    } else {
      return {
        // Allgemein
        'width': '' + htmlObj.width,
        'height': '' + htmlObj.height,
        'background-color': '' + htmlObj.background_color,
        'z-index': '' + htmlObj.z_index,
        'background': '' + htmlObj.background,
        'opacity': '' + htmlObj.opacity,
        'overflow': '' + htmlObj.overflow,
        'visibility': '' + htmlObj.visibility,

        // Text
        'font-style': '' + htmlObj.font_style,
        'font-weight': '' + htmlObj.font_weight,
        'color': '' + htmlObj.color,
        'font-family': '' + htmlObj.font_family,
        'text-align': '' + htmlObj.text_align,
        'word-break': '' + htmlObj.word_break,
        'word-wrap': '' + htmlObj.word_wrap,
        'white-space': '' + htmlObj.white_space,
        'font-size': '' + htmlObj.font_size,

        // Ausrichtung
        'position': '' + htmlObj.position,
        'left': '' + htmlObj.position_x,
        'top': '' + htmlObj.position_y,
        'margin': '' + htmlObj.margin,
        'transform': '' + htmlObj.transform,
        'display': '' + htmlObj.display,
        'float': '' + htmlObj.float,
        'clear': '' + htmlObj.clear,

        // Umrandung
        'border': '' + htmlObj.border,
        'padding': '' + htmlObj.padding,
        'border-color': '' + htmlObj.border_color,
        'border-radius': '' + htmlObj.border_radius,
        'border-style': '' + htmlObj.border_style,
        'outline': '' + htmlObj.outline
      };
    }

  }

  // Methoden für Interne Links sind hier !!! @created by Yavuz Bulunmaz --------------------------------------------

  ladeSeite(neueId: string): any {
    const valide = this.validiereInput(neueId);
    if (valide === true) {
      const zurzeitVerwendeteId = this.gridObjekteService.holeAktuelleSeitenId();
      this.gridObjekteService.abspeichern(zurzeitVerwendeteId);
      this.gridObjekteService.setzeAktuelleSeitenId(neueId);
      this.speichereAktuelleIdImLC();
      window.location.reload();
    }
  }

  speichereAktuelleIdImLC() {
    localStorage.setItem('aktuelleSeitenId', this.gridObjekteService.holeAktuelleSeitenId());
  }

  // test auf valide Eingabe im Input, bestimmt ob eine Seite geladen werden kann
  validiereInput(inputId): boolean {
    let istValide: boolean;
    istValide = false;

    // Überprüft ob die Seite existiert, Wenn ja wird ein true zurück gegeben
    for (let i = 0; i < this.seitenNavService.seitenListe.length; i++) {
      if (inputId === this.seitenNavService.seitenListe[i]) {
        istValide = true;
      }
    }
    return istValide;
  }
}
