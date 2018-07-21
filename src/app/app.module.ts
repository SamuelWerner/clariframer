import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LinealeComponent} from './dashboard/lineale/lineale.component';
import {GridComponent} from './dashboard/grid/grid.component';
import {ToolbarComponent} from './dashboard/toolbar/toolbar.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSliderModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {HTMLObjektDetailsComponent} from './dashboard/toolbar/html-objekt-details/html-objekt-details.component';
import {HtmlObjektDraggableDirective} from './dashboard/grid/html-objekt-draggable.directive';
import {DragAndDropToolboxDirective} from './dashboard/toolbar/drag-and-drop-toolbox.directive';
import {HtmlElementeComponent} from './dashboard/grid/html-elemente/html-elemente.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImportJSONComponent} from './dashboard/toolbar/import-json/import-json.component';
import {ImportXmlComponent} from './dashboard/toolbar/import-xml/import-xml.component';
import {HtmlAttributeComponent} from './dashboard/toolbar/html-objekt-details/html-attribute/html-attribute.component';
import {CodeInspectorComponent} from './dashboard/toolbar/code-inspector/code-inspector.component';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatTooltipModule,
    MatCardModule
  ],
  imports: [
    BrowserAnimationsModule
  ],
  declarations: [ImportJSONComponent, ImportXmlComponent],
})
export class ToolbarModule {
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LinealeComponent,
    GridComponent,
    ToolbarComponent,
    HTMLObjektDetailsComponent,
    HtmlObjektDraggableDirective,
    DragAndDropToolboxDirective,
    HtmlElementeComponent,
    HtmlAttributeComponent,
    CodeInspectorComponent
  ],
  imports: [
    BrowserModule, ToolbarModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LinealeComponent, GridComponent, ToolbarComponent, ImportJSONComponent, ImportXmlComponent, CodeInspectorComponent]
})
export class AppModule {
}
