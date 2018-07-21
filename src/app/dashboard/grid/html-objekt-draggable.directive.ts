import {Directive, ElementRef, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';
import {AufloesungService} from '../../aufloesung.service';
import {DashboardSettingsService} from '../dashboard-settings.service';
import {settings} from '../settings';
import {DashboardAnimations} from '../dashboard-animations';


/*
*   Diese Directive bindet ermöglicht das Drag und Drop auf dem Dashboard.
*   Außerdem ermöglicht sie das "snappen" an verschiedene Gridarten.
*
*   @author Sabrina Adam <sabrina.adam@iem.thm.de>
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*/

declare var Draggable: any;

@Directive({
    selector: '[appHtmlObjektDraggable]',
})
export class HtmlObjektDraggableDirective implements OnInit {
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() dragGreenSockDraggable: EventEmitter<any> = new EventEmitter();
    public drag: any;
    private settings: settings;
    private snapWeite: any = 1;
    private span = this.renderer.createElement('span');

    constructor(private elementRef: ElementRef,
                private aufloesungService: AufloesungService,
                private renderer: Renderer2,
                private dashboardSettingsService: DashboardSettingsService) {
        // An SettingsService Anmelden für änderung der Snapoptionen
        this.dashboardSettingsService.myMethod$.subscribe((data) => {
                this.settings = data;
            }
        );
    }

    ngOnInit() {
        const self: HtmlObjektDraggableDirective = this;

        // Die Abfrage ob ein Element static ist, verhindert, dass Elemente im Fluss und auch innerhalb von anderen
        // Objekten, verschoben werden können.
        if (this.elementRef.nativeElement.style.position !== 'static') {
            this.drag = Draggable.create(this.elementRef.nativeElement, {
                type: 'top,left',
                bounds: '#dropzoneDashboard',
                onPress: function (e) {
                    e.stopPropagation(); // verhindert das mehrere Elemente gleichzeitig verschoben werden
                },
                onDragStart() {
                    DashboardAnimations.animiereBeiKlickDrag(self.elementRef.nativeElement);
                    self.setSnapWeite();
                    self.renderer.addClass(self.span, 'zeigerDrop');
                    self.renderer.addClass(self.elementRef.nativeElement, 'markiertesElement');
                    self.renderer.appendChild(self.elementRef.nativeElement, self.span);
                    DashboardAnimations.animiereBeiKlickDrag(self.elementRef.nativeElement);

                },
                onDragEnd() {
                    DashboardAnimations.animiereBeiKlickDrop(self.elementRef.nativeElement);
                    self.renderer.removeClass(self.elementRef.nativeElement, 'zeigerDrop');
                    self.renderer.removeClass(self.elementRef.nativeElement, 'markiertesElement');
                    self.renderer.removeChild(self.elementRef.nativeElement, self.span);
                    const event = new MouseEvent('click', {bubbles: true});
                    self.elementRef.nativeElement.dispatchEvent(event);
                    self.change.emit(self.drag);

                },
                liveSnap: {

                    top: function (endValue) {
                        self.dragGreenSockDraggable.emit(self.drag);
                        return Math.round(endValue / self.snapWeite) * self.snapWeite;
                    },
                    left: function (endValue) {
                        self.dragGreenSockDraggable.emit(self.drag);
                        return Math.round(endValue / self.snapWeite) * self.snapWeite;
                    }
                }
            });

        }
    }

    setSnapWeite() {
        // Legt fest welche Snapweite unten im LiveSnap verwendet wird
        // Variablen geholt über settings Service -> Observable/ für settings
        if (this.settings.snapWeite === 0) {
            this.snapWeite = 1; // Pixelgenau
        } else if (this.settings.snapWeite === 1) {
            this.snapWeite = this.aufloesungService.getAufloesung().weiteAufteilungLineal / 10; // grid klein
        } else if (this.settings.snapWeite === 2) {
            this.snapWeite = this.aufloesungService.getAufloesung().weiteAufteilungLineal; // grid groß
        }
    }
}
