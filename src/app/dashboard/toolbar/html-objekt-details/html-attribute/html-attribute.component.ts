import {Component, OnInit} from '@angular/core';
import {HtmlObjektService} from '../../../html-objekt.service';
import {HTMLObjekt} from '../../../html-objekte/HTMLObjekt';
import {SeitenNaviService} from '../../seiten-navi.service';
import {GridObjekteService} from '../../../grid-objekte.service';
import {ToolbarAnimations} from '../../toolbar-animations';

import {Textarea} from '../../../html-objekte/form/Textarea';
import {Button} from '../../../html-objekte/form/Button';
import {Select} from '../../../html-objekte/form/Select';
import {Input} from '../../../html-objekte/form/Input';
import {Ol} from '../../../html-objekte/list/ol';
import {Ul} from '../../../html-objekte/list/ul';
import {Form} from '../../../html-objekte/form/Form';
import {Headline} from '../../../html-objekte/Headline';
import {Img} from '../../../html-objekte/Img';
import {A} from '../../../html-objekte/A';
import {Table} from '../../../html-objekte/table/Table';
import {Tr} from '../../../html-objekte/table/Tr';
import {Td} from '../../../html-objekte/table/Td';
import {Fieldset} from '../../../html-objekte/form/Fieldset';
import {Legend} from '../../../html-objekte/form/Legend';
import {Li} from '../../../html-objekte/list/li';
import {Label} from '../../../html-objekte/form/Label';
import {Div} from '../../../html-objekte/Div';
import {Option} from '../../../html-objekte/form/Option';
import {Dt} from '../../../html-objekte/list/dt';
import {Dd} from '../../../html-objekte/list/dd';
import {Th} from '../../../html-objekte/table/Th';
import {Tbody} from '../../../html-objekte/table/Tbody';
import {Tfoot} from '../../../html-objekte/table/Tfoot';
import {Thead} from '../../../html-objekte/table/Thead';
import {Caption} from '../../../html-objekte/table/Caption';
import {Blockquote} from '../../../html-objekte/blockquote';
import {Progress} from '../../../html-objekte/progress';
import {Summary} from '../../../html-objekte/details/summary';
import {P} from '../../../html-objekte/p';
import {Meter} from '../../../html-objekte/meter';
import {Q} from '../../../html-objekte/q';
import {Map} from '../../../html-objekte/Map';
import {Area} from '../../../html-objekte/Area';
import {Output} from '../../../html-objekte/form/Output';
import {Datalist} from '../../../html-objekte/form/Datalist';
import {Optgroup} from '../../../html-objekte/form/Optgroup';
import {Audio} from '../../../html-objekte/audio';
import {Video} from '../../../html-objekte/video';
import {Source} from '../../../html-objekte/source';

@Component({
  selector: 'app-html-attribute',
  templateUrl: './html-attribute.component.html',
  styleUrls: ['./html-attribute.component.css'],
})


export class HtmlAttributeComponent implements OnInit {

  public ausgewaehltesObjekt: HTMLObjekt;


    constructor(private htmlObjektService: HtmlObjektService,
              public seitenNavService: SeitenNaviService,
              public gridObjekteService: GridObjekteService) {
    // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
    this.htmlObjektService.myMethod$.subscribe((data) => {
        this.ausgewaehltesObjekt = data;
      }
    );
  }

  ngOnInit() {


  }

  /*
    Fieldset und Legend Element wird erzeugt.
    Legend wird in das Fieldset Element gelegt.
  */
  erzeugeFieldsetElementFuerForm() {
    ToolbarAnimations.animiereButtonKlick('fieldset');
    const fieldset = new Fieldset('auto', 'auto');
    const legend = new Legend('40px', '20px');
    fieldset.liegtAufDemGrid = true;
    legend.liegtAufDemGrid = true;

    legend.innererText = 'Legend';

    fieldset.innereHTMLObjekte.push(legend);

    this.ausgewaehltesObjekt.innereHTMLObjekte.push(fieldset);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }


  /*
  Input und Label Element wird erzeugt.
  Input wird in das Label Element gelegt.
  Attribut "for" von Label wird der ID von Input Element zugewiesen. Fuer Abhaengigkeit!
   */
  erzeugeInputElementFuerForm() {
    ToolbarAnimations.animiereButtonKlick('input');
    const input = new Input('50px', '20px');
    const label = new Label('20px', '20px');
    const div = new Div('auto', 'auto');
    div.background_color = 'transparent';
    div.position = 'static';
    div.border = 'none';
    div.liegtAufDemGrid = true;

    input.pattern = '[A-Za-z0-9]+';
    input.value = 'input';

    input.liegtAufDemGrid = true;
    input.margin = '20px 0px 0px 0px';
    label.liegtAufDemGrid = true;

    div.innereHTMLObjekte.push(label);
    div.innereHTMLObjekte.push(input);

    this.ausgewaehltesObjekt.innereHTMLObjekte.push(div);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);

    input.name = 'name' + input.id;
    label.for = '' + input.id;
    label.innererText = 'Label:';
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeDatalistFuerInput() {
    const datalist = new Datalist();
    for (let i = 1; i <= 5; i++) {
      const option = new Option('auto', 'auto');
      option.innererText = 'Option ' + i;
      datalist.innereHTMLObjekte.push(option);
    }
    this.inputCast().pattern = '.*';
    this.inputCast().value = '';
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(datalist);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());

    this.inputCast().list = '' + datalist.id;
  }

  erzeugeButtonElementFuerForm() {
    const button = new Button('90px', '30px');
    button.innererText = 'Click Me!';
    button.type = 'button';
    button.display = 'block';
    button.liegtAufDemGrid = true;

    this.ausgewaehltesObjekt.innereHTMLObjekte.push(button);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeSelectElementFuerForm() {
    ToolbarAnimations.animiereButtonKlick('select');
    const select = new Select('90px', '60px');
    select.display = 'block';
    select.liegtAufDemGrid = true;

    this.ausgewaehltesObjekt.innereHTMLObjekte.push(select);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());

    select.name = 'select' + select.id;
  }


  erzeugeOptionElementFuerForm() {
    this.ausgewaehltesObjekt.innereHTMLObjekte = [];

    if (this.selectCast().anzahlOptGroups > 0) {
      for (let j = 1; j <= this.selectCast().anzahlOptGroups; j++) {
        const optgroup = new Optgroup();
        optgroup.label = 'Gruppe ' + j;
        for (let i = 1; i <= this.selectCast().anzahlOptionen; i++) {
          const option = new Option('70px', '10px');
          option.innererText = 'Option ' + i;
          optgroup.innereHTMLObjekte.push(option);
        }
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(optgroup);
      }
    } else {
      for (let i = 1; i <= this.selectCast().anzahlOptionen; i++) {
        const option = new Option('70px', '10px');
        this.ausgewaehltesObjekt.innereHTMLObjekte.push(option);
        option.innererText = 'Option ' + i;
      }
    }


    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeTextareaElementFuerForm() {
    ToolbarAnimations.animiereButtonKlick('textarea');
    const textarea = new Textarea();

    textarea.liegtAufDemGrid = true;
    textarea.cols = 30;
    textarea.rows = 8;

    this.ausgewaehltesObjekt.innereHTMLObjekte.push(textarea);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeOutputElementFuerForm() {
    ToolbarAnimations.animiereButtonKlick('output');
    const output = new Output('auto', 'auto');
    output.innererText = 'output';

    this.ausgewaehltesObjekt.innereHTMLObjekte.push(output);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeLiElement() {
    ToolbarAnimations.animiereButtonKlick('li');
    const li = new Li('auto', 'auto');
    li.liegtAufDemGrid = true;
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(li);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeNavAElement() {
    ToolbarAnimations.animiereButtonKlick('liA');
    const a = new A('150px', '30px');
    a.liegtAufDemGrid = true;
    a.class = 'innerA';
    a.position = 'relative';
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(a);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }


  // verändert bei den H-Tags den Text auf u.g. wenn noch keiner gesetzt wurde
  changeInnerHtml() {
    if (this.ausgewaehltesObjekt.innererText.startsWith('Ich bin eine h')
      && this.ausgewaehltesObjekt.innererText.length === 24
      && this.ausgewaehltesObjekt.innererText.endsWith(' Headline')) {
      this.ausgewaehltesObjekt.innererText = 'Ich bin eine ' + this.ausgewaehltesObjekt.tagName + ' Headline';
    }
  }

  tabelleErstellen() {
    const tabelle = <Table> this.ausgewaehltesObjekt;

    tabelle.innereHTMLObjekte = [];

    const thead = new Thead();
    const tbody = new Tbody();
    const tfooter = new Tfoot();
    const caption = new Caption();

    thead.outline = '1px solid blue';
    tbody.outline = '1px solid red';
    tfooter.outline = '1px solid green';
    let zeile: any;

    zeile = this.tabelleSpaltenElementeErzeugen(tabelle, 'th');   // THeader
    thead.innereHTMLObjekte.push(zeile);

    for (let i = 0; i <= tabelle.anzahlZeilen; i++) {
      if (i === tabelle.anzahlZeilen) {                       // TFooter
        zeile = this.tabelleSpaltenElementeErzeugen(tabelle, 'td');
        tfooter.innereHTMLObjekte.push(zeile);
      } else {                                                    // TBody
        zeile = this.tabelleSpaltenElementeErzeugen(tabelle, 'td');
        tbody.innereHTMLObjekte.push(zeile);
      }
    }

    this.ausgewaehltesObjekt.innereHTMLObjekte.push(caption);
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(thead);
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(tbody);
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(tfooter);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    // Speichert die Seite über die aktuelle SeitenID (wegen Mehrseitigkeit)
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  tabelleGruppierungAuswaehlen(gruppierung) {
    ToolbarAnimations.animiereButtonKlick(gruppierung);
    for (const obj of this.ausgewaehltesObjekt.innereHTMLObjekte) {
      if (obj.tagName === gruppierung) {
        this.ausgewaehltesObjekt = obj;
        this.htmlObjektService.htmlObjektVerteilen(obj);
        break;
      }
    }
  }

  areaInImageAuswaehlen() {
    ToolbarAnimations.animiereButtonKlick('area');
    setTimeout(() => {
      for (const obj of this.ausgewaehltesObjekt.innereHTMLObjekte) {
        console.log(obj.tagName);
        if (obj.tagName === 'map') {
          this.ausgewaehltesObjekt = obj.innereHTMLObjekte[0];
          this.htmlObjektService.htmlObjektVerteilen(obj.innereHTMLObjekte[0]);
          if (this.seitenNavService.ausgewaehlterButton === 'attribute') {
            this.seitenNavService.menuePunkt = 'area';
          }
          break;
        }
      }
    }, 500);
  }

  erzeugeDtElement() {
    ToolbarAnimations.animiereButtonKlick('dt');
    const dt = new Dt('90px', '60px');
    dt.liegtAufDemGrid = true;
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(dt);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeDdElement() {
    ToolbarAnimations.animiereButtonKlick('dd');
    const dd = new Dd('90px', '60px');
    dd.liegtAufDemGrid = true;
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(dd);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeSummaryElement() {
    ToolbarAnimations.animiereButtonKlick('summary');
    const summary = new Summary('90px', '30px');
    summary.liegtAufDemGrid = true;
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(summary);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeDetailsPElement() {
    ToolbarAnimations.animiereButtonKlick('detailsP');
    const p = new P('100%', '20px');
    p.liegtAufDemGrid = true;
    p.class = 'detailsP';
    p.display = 'block';
    p.background_color = '';
    p.position = 'static';
    p.innererText = 'Details in P-Tag';
    this.ausgewaehltesObjekt.innereHTMLObjekte.push(p);
    this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
    this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
  }

  erzeugeMapAreaElementFuerImage() {
    ToolbarAnimations.animiereButtonKlick('mapArea');
    setTimeout(() => {
      const map = new Map('auto', 'auto');
      map.name = 'map' + this.ausgewaehltesObjekt.id;
      const area = new Area('auto', 'auto');
      area.coords = '0,0,82,126';
      area.shape = 'rect';
      area.alt = 'Beispiel alt';
      area.href = 'http://thm.de';
      area.title = 'Hier ist area zum Klicken';
      map.innereHTMLObjekte.push(area);

      this.imgCast().usemap = 'map' + this.ausgewaehltesObjekt.id;
      this.ausgewaehltesObjekt.innereHTMLObjekte.push(map);
      this.gridObjekteService.htmlObjektGlobalIDFuerInnereElementeErzeugen(this.ausgewaehltesObjekt);
      this.gridObjekteService.abspeichern(this.gridObjekteService.holeAktuelleSeitenId());
    }, 500);
  }

  thCast() {
    return <Th> this.ausgewaehltesObjekt;
  }

  formCast() {
    return <Form> this.ausgewaehltesObjekt;
  }

  fieldsetCast() {
    return <Fieldset> this.ausgewaehltesObjekt;
  }

  tdCast() {
    return <Td> this.ausgewaehltesObjekt;
  }

  private tabelleSpaltenElementeErzeugen(tabelle, zelle) {
    let neueZelle;

    const zeile = new Tr('200px', '30px');
    zeile.liegtAufDemGrid = true;
    for (let j = 0; j < tabelle.anzahlSpalten; j++) {
      if (zelle === 'td') {
        neueZelle = new Td('22px', '22px');
      } else if (zelle === 'th') {
        neueZelle = new Th('22px', '22px');
      }
      neueZelle.liegtAufDemGrid = true;
      zeile.innereHTMLObjekte.push(neueZelle);
    }
    return zeile;
  }

  buttonCast() {
    return <Button> this.ausgewaehltesObjekt;
  }

  outputCast() {
    return <Output> this.ausgewaehltesObjekt;
  }

  inputCast() {
    return <Input> this.ausgewaehltesObjekt;
  }

  selectCast() {
    return <Select> this.ausgewaehltesObjekt;
  }

  imgCast() {
    return <Img> this.ausgewaehltesObjekt;
  }

  olCast() {
    return <Ol> this.ausgewaehltesObjekt;
  }

  ulCast() {
    return <Ul> this.ausgewaehltesObjekt;
  }

  headlineCast() {
    return <Headline> this.ausgewaehltesObjekt;
  }

  tableCast() {
    return <Table> this.ausgewaehltesObjekt;
  }

  textareaCast() {
    return <Textarea> this.ausgewaehltesObjekt;
  }

  aCast() {
    return <A> this.ausgewaehltesObjekt;
  }

  blockquoteCast() {
    return <Blockquote> this.ausgewaehltesObjekt;
  }

  progressCast() {
    return <Progress> this.ausgewaehltesObjekt;
  }

  meterCast() {
    return <Meter> this.ausgewaehltesObjekt;
  }

  qCast() {
    return <Q> this.ausgewaehltesObjekt;
  }

  areaCast() {
    return <Area> this.ausgewaehltesObjekt;
  }

    audioCast() {
        return <Audio> this.ausgewaehltesObjekt;
    }

    videoCast() {
        return <Video> this.ausgewaehltesObjekt;
    }

    sourceCast() {
        return <Source> this.ausgewaehltesObjekt;
    }
}
