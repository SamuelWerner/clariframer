import {Directive, ElementRef, OnInit} from '@angular/core';
import {AufloesungService} from '../../aufloesung.service';

declare var Draggable: any;

@Directive({
  selector: '[appDragAndDropToolbox]'
})
export class DragAndDropToolboxDirective implements OnInit {

  public drag: any;
  public snapWeite: number;


  constructor(private elementRef: ElementRef,
              private aufloesungService: AufloesungService) {
  }

  ngOnInit() {
    this.snapWeite = this.aufloesungService.getAufloesung().weiteAufteilungLineal / 10;
    const self: DragAndDropToolboxDirective = this;

    this.drag = Draggable.create(this.elementRef.nativeElement, {
      /*  Rastet an die nahest gelegene Stelle von einem Inkrement des angegebenen Pixel-Wertes ein.
      *   Keine Werte kleiner 0 zulassen, damit das Objekt nicht aus dem Dashboardbereich geschoben werden kann.
      */
      zIndexBoost: false,
      trigger: document.getElementById('toolboxText'),
      type: 'top,left',
      bounds: '#dropzoneDashboard',
      onDragEnd() {
        // Es wird am Ende des Drags das Draggable versendet. Wird in grid.component.ts behandelt (dragChange).
        const event = new MouseEvent('click', {bubbles: true});
        self.elementRef.nativeElement.dispatchEvent(event);
      },
      liveSnap: {
        top: function (endValue) {
          if (Math.round(endValue / self.snapWeite) * self.snapWeite < 0) {
            return 1;
          } else {
            return Math.round(endValue / self.snapWeite) * self.snapWeite;
          }
        },
        left: function (endValue) {
          return Math.round(endValue / self.snapWeite) * self.snapWeite;
        }
      }
    }).zIndex = 4000;
  }
}
