import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MatDialog, MatInputModule} from '@angular/material';
import {GridObjekteService} from '../../grid-objekte.service';


@Component({
    selector: 'app-import-json',
    templateUrl: './import-json.component.html',
    styleUrls: ['./import-json.component.css']
})
export class ImportJSONComponent implements OnInit {
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

    JSONDokumentLadenUndGridNeuAufbauen() {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.gridObjekteService.JSONInGridLaden(fileReader.result);
        };
        fileReader.readAsText(this.file);
    }
}