import {Component, OnInit} from '@angular/core';
import {HtmlObjektService} from '../../html-objekt.service';
import {HTMLObjekt} from '../../html-objekte/HTMLObjekt';
import {GridObjekteService} from '../../grid-objekte.service';

@Component({
  selector: 'app-code-inspector',
  templateUrl: './code-inspector.component.html',
  styleUrls: ['./code-inspector.component.css']
})
export class CodeInspectorComponent implements OnInit {
  public ausgewaehltesObjekt: HTMLObjekt;
  content: string;
  css: boolean;
  constructor(private htmlObjektService: HtmlObjektService,
              private gridObjekteService: GridObjekteService) {
    // An dem HTML-Objekt Service anmelden und über Änderungen informiert werden
    this.htmlObjektService.myMethod$.subscribe((data) => {
        this.ausgewaehltesObjekt = data;
      }
    );
  }

  ngOnInit() {
    const pretty = require('pretty');
    this.content = (pretty(this.objektAlsHTML(), {ocd: true}));
  }

  valueChange() {
    const pretty = require('pretty');
    this.content = (pretty(this.objektAlsHTML(), {ocd: true}));
  }

  public objektAlsHTML() {
    let result = '';
    result += ' <' + this.ausgewaehltesObjekt.tagName + ' ' + this.attributeVonObjektZuString(this.ausgewaehltesObjekt) + '> ' +
                  this.ausgewaehltesObjekt.innererText +
                  this.objektAlsHTMLRekursiv(this.ausgewaehltesObjekt.innereHTMLObjekte) +
              ' </' + this.ausgewaehltesObjekt.tagName + '> ';
    return result;
  }

  private objektAlsHTMLRekursiv(objekte: Array<HTMLObjekt>): string {
    let result = '';
    if (null === objekte) {
      return '';
    }
    for (const htmlObjekt of objekte) {
      if (htmlObjekt.innereHTMLObjekte == null || htmlObjekt.innereHTMLObjekte.length <= 0) {
        result += ' <' + htmlObjekt.tagName + ' ' + this.attributeVonObjektZuString(htmlObjekt) + '> ' +
                        htmlObjekt.innererText +
                  ' </' + htmlObjekt.tagName + '> ';
      } else {
        result += ' <' + htmlObjekt.tagName + ' ' + this.attributeVonObjektZuString(htmlObjekt) + '> ' +
                      htmlObjekt.innererText +
                      this.objektAlsHTMLRekursiv(htmlObjekt.innereHTMLObjekte) +
                  ' </' + htmlObjekt.tagName + '> ';
      }
    }
    return result;
  }

  private attributeVonObjektZuString(obj: HTMLObjekt) {
    if (!this.css) {
      return '';
    }
    let resultCSS = 'style="';
    let resultAttribute = '';

    for (let [key, value] of Object.entries(obj)) {
      if (this.testenObKeinAttribut(key)) {
          continue;
      }

      if (this.testenObCSS(key)) {
        key = key.replace(/_/g, '-');
        key = key.replace(/position-x/g, 'left');
        key = key.replace(/position-y/g, 'top');
        resultCSS += key + ':' + value + ';';
      } else {
        key = key.replace(/_/g, '-');
        resultAttribute += ' ' + key + '="' + value + '"';
      }
    }
    return resultAttribute + resultCSS + '"';
  }

  private testenObKeinAttribut(key) {
    if (key === 'innererText' || key === 'innereHTMLObjekte'
      || key === 'liegtAufDemGrid' || key === 'inDiesesObjektKannGedropptWerden'
      || key === 'tagName' || key === 'anzahlZeilen' || key === 'anzahlSpalten') {
      return true;
    }
    return false;
  }

  private testenObCSS(key) {
    switch (key) {
      case 'width' : return true;
      case 'height' : return true;
      case 'background_color' : return true;
      case 'display' : return true;
      case 'z_index' : return true;
      case 'background' : return true;
      case 'opacity' : return true;
      case 'overflow' : return true;
      case 'visibility' : return true;
      case 'border' : return true;
      case 'border_color' : return true;
      case 'border_radius' : return true;
      case 'margin' : return true;
      case 'padding' : return true;
      case 'outline' : return true;
      case 'position' : return true;
      case 'position_x' : return true;
      case 'position_y' : return true;
      case 'transform' : return true;
      case 'float' : return true;
      case 'clear' : return true;
      case 'color' : return true;
      case 'font_weight' : return true;
      case 'font_style' : return true;
      case 'font_family' : return true;
      case 'text_align' : return true;
      case 'vertical_align' : return true;
      case 'word_break' : return true;
      case 'word_wrap' : return true;
      case 'white_space' : return true;
      case 'font_size' : return true;
    }
    return false;
  }
}
