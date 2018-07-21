import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import {GridObjekteService} from '../../grid-objekte.service';

@Component({
  selector: 'app-import-xml',
  templateUrl: './import-xml.component.html',
  styleUrls: ['./import-xml.component.css']
})
export class ImportXmlComponent implements OnInit {
  @ViewChild('grid', {read: ViewContainerRef}) gridComponentHost;
  file: any;

  constructor(public dialog: MatDialog,
              private gridObjekteService: GridObjekteService) {
  }

  ngOnInit() {
  }

  public neuesDokumentEingegeben(e) {
    this.file = e.target.files[0];
  }

  xmlDokumentLadenUndGridNeuAufbauen() {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.gridObjekteService.xmlInJSONumwandelnUndInGridLaden(fileReader.result);
    };
    fileReader.readAsText(this.file);
  }
}
