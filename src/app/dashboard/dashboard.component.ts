import {Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LinealeComponent} from './lineale/lineale.component';
import {GridComponent} from './grid/grid.component';
import {AufloesungService} from '../aufloesung.service';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {Meta} from '@angular/platform-browser';

/*
*   Diese Klasse führt alle Teil-Komponenten dynamisch zusammen.
*   Dynamisch bedeutet in diesem Fall, dass die Klasse auf Änderungen
*   der Browser-Fenster Größe reagiert und die Komponenten neu lädt
*
*   @author Samuel Werner <samuel.werner@iem.thm.de>
*/

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('lineale', {read: ViewContainerRef}) linealeComponentHost;
  @ViewChild('grid', {read: ViewContainerRef}) gridComponentHost;
  @ViewChild('toolbar', {read: ViewContainerRef}) toolbarComponentHost;
  oldWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.oldWidth !== event.target.innerWidth) {
      this.oldWidth = event.target.innerWidth;
      this.dashboardErstellen();
    }
  }

  constructor(
    private aufloesungService: AufloesungService, // Auflösung des Bildschirms ermitteln
    private componentFactoryResolver: ComponentFactoryResolver,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'Content-Security-Policy',
      content: 'connect-src \'self\' file: data: blob: filesystem:; default-src *; style-src \'self\' \'unsafe-inline\';' +
      ' script-src \'self\' \'unsafe-inline\' \'unsafe-eval\''
    });
  }

  ngOnInit() {
    this.dashboardErstellen();
    this.oldWidth = window.innerWidth;
  }

  private dashboardErstellen() {
    // Lineale dynmaisch laden
    const componentFactoryLineale = this.componentFactoryResolver.resolveComponentFactory(LinealeComponent);
    const viewContainerRefLineale = this.linealeComponentHost;
    viewContainerRefLineale.clear();
    viewContainerRefLineale.createComponent(componentFactoryLineale);

    // Dashboard Grid dynamisch laden.
    const componentFactoryGrid = this.componentFactoryResolver.resolveComponentFactory(GridComponent);
    const viewContainerRefGrid = this.gridComponentHost;
    viewContainerRefGrid.clear();
    viewContainerRefGrid.createComponent(componentFactoryGrid);

    // Toolbar dynamisch laden.
    const componentFactoryToolbar = this.componentFactoryResolver.resolveComponentFactory(ToolbarComponent);
    const viewContainerRefToolbar = this.toolbarComponentHost;
    viewContainerRefToolbar.clear();
    viewContainerRefToolbar.createComponent(componentFactoryToolbar);
  }
}
