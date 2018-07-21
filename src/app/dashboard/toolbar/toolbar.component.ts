import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ImportJSONComponent} from './import-json/import-json.component';
import {HtmlObjektService} from '../html-objekt.service';
import {GridComponent} from '../grid/grid.component';
import {GridObjekteService} from '../grid-objekte.service';
import {SeitenNaviService} from './seiten-navi.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ImportXmlComponent} from './import-xml/import-xml.component';
import html2canvas from 'html2canvas';
import {CodeInspectorComponent} from './code-inspector/code-inspector.component';
import {ToolbarAnimations} from './toolbar-animations';
import {AufloesungService} from '../../aufloesung.service';
import {BildschirmQHD} from '../../bildschirm-qhd.enum';
import {BildschirmHD} from '../../bildschirm-hd.enum';
import {BildschirmUHD} from '../../bildschirm-uhd.enum';
// IMPORT DER HTML-OBJEKTE
import {HTMLObjekt} from '../html-objekte/HTMLObjekt';
import {Div} from '../html-objekte/Div';
import {Span} from '../html-objekte/span';
import {Table} from '../html-objekte/table/Table';
import {Form} from '../html-objekte/form/Form';
import {Img} from '../html-objekte/Img';
import {P} from '../html-objekte/p';
import {Headline} from '../html-objekte/Headline';
import {Ul} from '../html-objekte/list/ul';
import {Ol} from '../html-objekte/list/ol';
import {A} from '../html-objekte/A';
import {Nav} from '../html-objekte/nav';
import {Header} from '../html-objekte/Header';
import {Footer} from '../html-objekte/Footer';
import {Body} from '../html-objekte/Body';
import {Article} from '../html-objekte/Article';
import {Main} from '../html-objekte/Main';
import {Dl} from '../html-objekte/list/dl';
import {Strong} from '../html-objekte/Strong';
import {S} from '../html-objekte/s';
import {Small} from '../html-objekte/small';
import {U} from '../html-objekte/u';
import {Em} from '../html-objekte/em';
import {Pre} from '../html-objekte/pre';
import {Section} from '../html-objekte/section';
import {Address} from '../html-objekte/address';
import {Dialog} from '../html-objekte/dialog';
import {Hr} from '../html-objekte/hr';
import {Blockquote} from '../html-objekte/blockquote';
import {Progress} from '../html-objekte/progress';
import {Details} from '../html-objekte/details/details';
import {Meter} from '../html-objekte/meter';
import {Q} from '../html-objekte/q';
import {Bdo} from '../html-objekte/bdo';
import {Code} from '../html-objekte/code';
import {Kbd} from '../html-objekte/kbd';
import {Samp} from '../html-objekte/samp';
import {Var} from '../html-objekte/var';
import {Aside} from '../html-objekte/aside';
import {Svg} from '../html-objekte/Svg';
import {Map} from '../html-objekte/Map';
import {Canvas} from '../html-objekte/Canvas';
import {Picture} from '../html-objekte/Picture';
import {Figure} from '../html-objekte/Figure';
import {Figcaption} from '../html-objekte/Figcaption';
import {Audio} from '../html-objekte/audio';
import {Video} from '../html-objekte/video';
import {Source} from '../html-objekte/source';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild(GridComponent) grid: GridComponent;

  // variable um Error zu vermeiden
  public downloadJsonHref;

  /*######### HTML OBJEKT DEKLARATIONEN #############*/
  public divObjekt: Div;
  public spanObjekt: Span;
  public tableObjekt: Table;
  public formObjekt: Form;
  public imgObjekt: Img;
  public aObjekt: A;
  public headlineObjekt: Headline;
  public pObjekt: P;
  public ulObjekt: Ul;
  public olObjekt: Ol;
  public navObjekt: Nav;
  public headerObjekt: Header;
  public footerObjekt: Footer;
  public bodyObjekt: Body;
  public articleObjekt: Article;
  public mainObjekt: Main;
  public dlObjekt: Dl;
  public strongObjekt: Strong;
  public sObjekt: S;
  public smallObjekt: Small;
  public uObjekt: U;
  public emObjekt: Em;
  public preObjekt: Pre;
  public sectionObjekt: Section;
  public addressObjekt: Address;
  public dialogObjekt: Dialog;
  public hrObjekt: Hr;
  public blockquoteObjekt: Blockquote;
  public progressObjekt: Progress;
  public detailsObjekt: Details;
  public meterObjekt: Meter;
  public qObjekt: Q;
  public bdoObjekt: Bdo;
  public svgObjekt: Svg;
  public mapObjekt: Map;
  public canvasObjekt: Canvas;
  public pictureObjekt: Picture;
  public figureObjekt: Figure;
  public codeObjekt: Code;
  public kbdObjekt: Kbd;
  public sampObjekt: Samp;
  public varObjekt: Var;
  public asideObjekt: Aside;
    public sourceObjekt: Source;
    public audioObjekt: Audio;
    public videoObjekt: Video;

  public ausgewaehltesObjekt: HTMLObjekt;

  // Anpassungsvariablen für die Toolbox

  public ausgewaehlteDOMBausteinArt = 'basic'; // select der DOM Kategorie
  public toolbarMinimieren = true;
    public toolbarVerbergen = false;


  constructor(private htmlObjektService: HtmlObjektService,
              private gridObjekteService: GridObjekteService,
              public dialog: MatDialog,
              public seitenNaviService: SeitenNaviService,
              public sanitizer: DomSanitizer,
              public aufloesungService: AufloesungService) {
      this.divObjekt = new Div('80%', '15vw');
      this.spanObjekt = new Span('60vw', '10vh');
      this.imgObjekt = new Img('10vw', '10vw');
      this.pObjekt = new P('100%', '4vh');
      this.aObjekt = new A('50vw', '5vh');
      this.headlineObjekt = new Headline('60vw', 'auto');
      this.headerObjekt = new Header('100%', '5vw');
      this.bodyObjekt = new Body('80vw', '10vw');
      this.footerObjekt = new Footer('100%', '10vw');
      this.articleObjekt = new Article('30vw', '10vw');
      this.mainObjekt = new Main('80vw', '30vw');
      this.svgObjekt = new Svg('10vw', '10vw');
    this.mapObjekt = new Map('auto', 'auto');
      this.canvasObjekt = new Canvas('10vw', '10vw');
      this.pictureObjekt = new Picture('15vw', '15vw');
    this.videoObjekt = new Video('auto', 'auto');
      this.audioObjekt = new Audio('30vw', '2.5 vw');

    // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
    this.htmlObjektService.myMethod$.subscribe((data) => {
        this.ausgewaehltesObjekt = data;
      }
    );
  }

  ngOnInit() {
  }

  auswaehlenUndZufaelligeFarbeZuweisen(obj: HTMLObjekt) {
    this.ausgewaehltesObjekt = obj;
    ToolbarAnimations.animiereButtonKlick(obj.tagName);
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
    obj.background_color = this.zufaelligeFarbeGenerierenHex();
  }

  objektAuswaehlen(obj: HTMLObjekt) {
    this.ausgewaehltesObjekt = obj;
    ToolbarAnimations.animiereButtonKlick(obj.tagName);
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
  }

  neuesAElementErstellen() {
    this.aObjekt = new A('200px', '50px');
    ToolbarAnimations.animiereButtonKlick('a');
    this.ausgewaehltesObjekt = this.aObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesTabellenObjektErzeugen() {
      this.tableObjekt = new Table('30vw', '10vw');
    ToolbarAnimations.animiereButtonKlick('table');
    this.ausgewaehltesObjekt = this.tableObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
      this.tableObjekt.background_color = this.zufaelligeFarbeGenerierenHex();

  }

  neuesFormObjektErzeugen() {
      this.formObjekt = new Form('30vw', '60vh');
    ToolbarAnimations.animiereButtonKlick('form');
    this.formObjekt.action = 'http://httpbin.org/post';
    this.formObjekt.method = 'post';
    this.ausgewaehltesObjekt = this.formObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
      this.formObjekt.background_color = this.zufaelligeFarbeGenerierenHex();

  }

  neuesUlObjektErzeugen() {
      this.ulObjekt = new Ul('5vw', '20vw');
    ToolbarAnimations.animiereButtonKlick('ul');
    this.ausgewaehltesObjekt = this.ulObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
      this.ulObjekt.background_color = this.zufaelligeFarbeGenerierenHex();
  }

  neuesOlObjektErzeugen() {
      this.olObjekt = new Ol('5vw', '20vw');
    ToolbarAnimations.animiereButtonKlick('ol');
    this.ausgewaehltesObjekt = this.olObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
      this.olObjekt.background_color = this.zufaelligeFarbeGenerierenHex();

  }

  neuesNavObjektErzeugen() {
      this.navObjekt = new Nav('100%', '7vw');
    ToolbarAnimations.animiereButtonKlick('nav');
    this.ausgewaehltesObjekt = this.navObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
      this.navObjekt.background_color = this.zufaelligeFarbeGenerierenHex();

  }

  neuesDlObjektErzeugen() {
      this.dlObjekt = new Dl('5vw', '30vw');
    ToolbarAnimations.animiereButtonKlick('dl');
    this.ausgewaehltesObjekt = this.dlObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
      this.dlObjekt.background_color = this.zufaelligeFarbeGenerierenHex();

  }

  neuesStrongObjektErstellen() {
      this.strongObjekt = new Strong('20vw', '');
    ToolbarAnimations.animiereButtonKlick('strong');
    this.ausgewaehltesObjekt = this.strongObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesSObjektErstellen() {
      this.sObjekt = new S('20vw', '');
    ToolbarAnimations.animiereButtonKlick('s');
    this.ausgewaehltesObjekt = this.sObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesSmallObjektErstellen() {
      this.smallObjekt = new Small('20vw', '');
    ToolbarAnimations.animiereButtonKlick('small');
    this.ausgewaehltesObjekt = this.smallObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesUObjektErstellen() {
      this.uObjekt = new U('20vw', '');
    ToolbarAnimations.animiereButtonKlick('u');
    this.ausgewaehltesObjekt = this.uObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesEmObjektErstellen() {
      this.emObjekt = new Em('20vw', '');
    ToolbarAnimations.animiereButtonKlick('em');
    this.ausgewaehltesObjekt = this.emObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesPreObjektErstellen() {
      this.preObjekt = new Pre('auto', 'auto');
    ToolbarAnimations.animiereButtonKlick('pre');
    this.ausgewaehltesObjekt = this.preObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesSectionObjektErstellen() {
      this.sectionObjekt = new Section('40vw', '20vw');
    ToolbarAnimations.animiereButtonKlick('section');
    this.ausgewaehltesObjekt = this.sectionObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesAddressObjektErstellen() {
      this.addressObjekt = new Address('30vw', '2vw');
    ToolbarAnimations.animiereButtonKlick('address');
    this.ausgewaehltesObjekt = this.addressObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesDialogObjektErstellen() {
    this.dialogObjekt = new Dialog('', '');
    ToolbarAnimations.animiereButtonKlick('dialog');
    this.ausgewaehltesObjekt = this.dialogObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesHrObjektErstellen() {
      this.hrObjekt = new Hr('100%', '0.1vw');
    ToolbarAnimations.animiereButtonKlick('hr');
    this.ausgewaehltesObjekt = this.hrObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesBlockquoteObjektErzeugen() {
      this.blockquoteObjekt = new Blockquote('5vw', '5vw');
    ToolbarAnimations.animiereButtonKlick('blockquote');
    this.ausgewaehltesObjekt = this.blockquoteObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesProgressObjektErzeugen() {
      this.progressObjekt = new Progress('30vw', '2vw');
    ToolbarAnimations.animiereButtonKlick('progress');
    this.ausgewaehltesObjekt = this.progressObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesDetailsObjektErzeugen() {
      this.detailsObjekt = new Details('30vw', '30vw');
    ToolbarAnimations.animiereButtonKlick('details');
    this.ausgewaehltesObjekt = this.detailsObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesMeterObjektErzeugen() {
      this.meterObjekt = new Meter('10vw', '2vw');
    ToolbarAnimations.animiereButtonKlick('meter');
    this.ausgewaehltesObjekt = this.meterObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesQObjektErzeugen() {
      this.qObjekt = new Q('30vw', '5vw');
    ToolbarAnimations.animiereButtonKlick('q');
    this.ausgewaehltesObjekt = this.qObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesBdoObjektErzeugen() {
      this.bdoObjekt = new Bdo('20vw', '2vw');
    ToolbarAnimations.animiereButtonKlick('bdo');
    this.ausgewaehltesObjekt = this.bdoObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();
  }

  neuesFigureObjektErzeugen() {
      this.figureObjekt = new Figure('10vw', '10vw');
    const figcaption = new Figcaption('auto', 'auto');
    figcaption.innererText = 'Bildbeschriftung - In figure muss noch Bild gedroppt werden';
    figcaption.liegtAufDemGrid = true;
    this.figureObjekt.innereHTMLObjekte.push(figcaption);
    this.ausgewaehltesObjekt = this.figureObjekt;
    ToolbarAnimations.animiereButtonKlick('figure');
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesCodeObjektErstellen() {
      this.codeObjekt = new Code('25vw', '');
    ToolbarAnimations.animiereButtonKlick('code');
    this.ausgewaehltesObjekt = this.codeObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesKbdObjektErstellen() {
      this.kbdObjekt = new Kbd('20vw', '');
    ToolbarAnimations.animiereButtonKlick('kbd');
    this.ausgewaehltesObjekt = this.kbdObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesSampObjektErstellen() {
      this.sampObjekt = new Samp('35vw', '');
    ToolbarAnimations.animiereButtonKlick('samp');
    this.ausgewaehltesObjekt = this.sampObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesVarObjektErstellen() {
      this.varObjekt = new Var('20vw', '');
    ToolbarAnimations.animiereButtonKlick('var');
    this.ausgewaehltesObjekt = this.varObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

  neuesAsideObjektErstellen() {
      this.asideObjekt = new Aside('10vw', '30vw');
    ToolbarAnimations.animiereButtonKlick('aside');
    this.ausgewaehltesObjekt = this.asideObjekt;
    this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
    this.seitenNaviService.entferneNavMenue();

  }

    neuesAudioObjektErstellen() {
        this.audioObjekt = new Audio('80vw', '50vw');
        ToolbarAnimations.animiereButtonKlick('audio');
        this.ausgewaehltesObjekt = this.audioObjekt;
        this.htmlObjektService.htmlObjektVerteilen(this.ausgewaehltesObjekt);
        this.seitenNaviService.entferneNavMenue();

    }

  alleHtmlObjekteLoeschen() {
    this.gridObjekteService.htmlObjekteLoeschen();
    this.htmlObjektService.htmlObjektVerteilen(null);
  }

  openImportJSONdialog(): void {
    const aufloesung = this.aufloesungService.getAufloesung();
    if (aufloesung === BildschirmQHD) {
      this.dialog.open(ImportJSONComponent, {
        width: '50%'
      });
    }
    if (aufloesung === BildschirmHD) {
      this.dialog.open(ImportJSONComponent, {
        width: '30%'
      });
    }
    if (aufloesung === BildschirmUHD) {
      this.dialog.open(ImportJSONComponent, {
        width: '15%'
      });
    }
  }

  openImportXMLdialog(): void {
    const aufloesung = this.aufloesungService.getAufloesung();
    if (aufloesung === BildschirmQHD) {
      this.dialog.open(ImportXmlComponent, {
        width: '50%'
      });
    }
    if (aufloesung === BildschirmHD) {
      this.dialog.open(ImportXmlComponent, {
        width: '30%'
      });
    }
    if (aufloesung === BildschirmUHD) {
      this.dialog.open(ImportXmlComponent, {
        width: '15%'
      });
    }
  }

  openCodeAnzeigendialog(): void {
    this.dialog.open(CodeInspectorComponent, {
      width: '85%',
      height: '85%',
      maxWidth: '85%',
      maxHeight: '85%'
    });
  }

  zeigeNavSeite() {
    this.seitenNaviService.zeigeNavMenue();
  }

  generiereDownloadJsonUri(): void {
    const dieJSON = JSON.stringify(this.gridObjekteService.htmlObjekte);
    const blob = new Blob([dieJSON], {type: 'text/json'});
    const url = window.URL.createObjectURL(blob);
    this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl(url);
  }


  generiereDownloadXMLUri() {
    const xml = this.gridObjekteService.alleElementeAlsXML();
    const blob = new Blob([xml], {type: 'text/xml'});
    const url = window.URL.createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  public zufaelligeFarbeGenerierenHex() {
    const zeichen = '0123456789ABCDEF'.split('');
    let farbe = '#';
    for (let i = 0; i < 6; i++) {
      farbe += zeichen[Math.floor(Math.random() * 16)];
    }
    return farbe;
  }

  drucken(): void {
    window.print();
  }

  generierePNG() {
    html2canvas(document.querySelector('#dropzoneDashboard')).then(canvas => {
      const avar = document.createElement('a');
      avar.href = canvas.toDataURL('image/png');
      avar.download = ('Clariframer.png');
      document.body.appendChild(avar);
      avar.click();
      document.body.removeChild(avar);
    });
  }

    // Methode zum minimieren der Toolbar am oberen Rand & Toolbar verbergen
  minimiereToolbar() {
    if (!this.toolbarMinimieren) {
      this.toolbarMinimieren = true;
    } else {
      this.toolbarMinimieren = false;
    }
  }

    toggleToolbar() {
        if (this.toolbarVerbergen) {
            this.toolbarVerbergen = false;
        } else {
            this.toolbarVerbergen = true;
        }
    }

}
