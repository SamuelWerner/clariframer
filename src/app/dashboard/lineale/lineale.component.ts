import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AufloesungService} from '../../aufloesung.service';

/*
*   Diese Klasse erstellt die Lineale des Dahsboards.
*   Mithilfe des Auflösungsservice werden die Lineale dynamisch an die Auflösung angepasst.
*
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*/


@Component({
  selector: 'app-lineale',
  templateUrl: './lineale.component.html',
  styleUrls: ['./lineale.component.css']
})
export class LinealeComponent implements OnInit {
  @ViewChild('horizontalesLinealStriche') horizontalesLinealStriche: ElementRef;
  @ViewChild('vertikalesLinealStriche') vertikalesLinealStriche: ElementRef;
  @ViewChild('eckeLineal') eckeLineal: ElementRef;

  constructor(
    private aufloesungService: AufloesungService, // Auflösung des Bildschirms ermitteln
    private renderer: Renderer2, // Wird zur DOM-Manipulation benötigt
  ) {
  }

  ngOnInit() {
    this.linealeErstellen();
  }

  private linealeErstellen() {
    // Lineale abhänig von der Auflösung erstellen
    this.vertikalesLinealErstellen();
    this.horizontalesLinealErstellen();
    // Ecke Lineal Stylesheet setzen
    this.renderer.addClass(this.eckeLineal.nativeElement,
      'eckeLineal' + this.aufloesungService.getAufloesung().bezeichnung);
  }

  private horizontalesLinealErstellen() {
    for (let i = 0; i < this.aufloesungService.getAufloesung().aufteilungLineal; i++) {
      const div = this.renderer.createElement('div');
      const span = this.renderer.createElement('span');
      const text = this.renderer.createText(i * this.aufloesungService.getAufloesung().weiteAufteilungLineal + '');
      this.renderer.setStyle(div, 'left', i * this.aufloesungService.getAufloesung().weiteAufteilungLineal + 'px');
      this.renderer.addClass(div, 'horizontalesLinealStriche');
      this.renderer.addClass(div, 'linealHorizontal' + this.aufloesungService.getAufloesung().bezeichnung);
      this.renderer.addClass(this.horizontalesLinealStriche.nativeElement,
        'linealHorizontal' + this.aufloesungService.getAufloesung().bezeichnung);
      this.renderer.appendChild(span, text);
      this.renderer.appendChild(div, span);
      this.renderer.appendChild(this.horizontalesLinealStriche.nativeElement, div);
    }
  }

  private vertikalesLinealErstellen() {
    for (let i = 0; i < this.aufloesungService.getAufloesung().aufteilungLineal; i++) {
      const div = this.renderer.createElement('div');
      const span = this.renderer.createElement('span');
      const text = this.renderer.createText(i * this.aufloesungService.getAufloesung().weiteAufteilungLineal + '');
      this.renderer.setStyle(div, 'top', i * this.aufloesungService.getAufloesung().weiteAufteilungLineal + 'px');
      this.renderer.addClass(div, 'vertikalesLinealStriche');
      this.renderer.addClass(div, 'linealVertikal' + this.aufloesungService.getAufloesung().bezeichnung);
      this.renderer.addClass(this.vertikalesLinealStriche.nativeElement,
        'linealVertikal' + this.aufloesungService.getAufloesung().bezeichnung);
      this.renderer.appendChild(span, text);
      this.renderer.appendChild(div, span);
      this.renderer.appendChild(this.vertikalesLinealStriche.nativeElement, div);
    }
  }
}
