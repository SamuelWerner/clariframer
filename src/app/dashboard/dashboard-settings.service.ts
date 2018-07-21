import {Injectable} from '@angular/core';
import {settings} from './settings';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs/index';

/**
 * Created by Sabrina Adam <sabrina.adam@iem.thm.de>  on 07.06.2018
 * Diese Komponente gewähleistet das weiterreichen der Nutzereinstellungen aus der Toolbox (siehe html-objekt-details)
 * an die jeweilig anzupassende Komponente
 * Damit ein Initialwert für die Einstellungen übergeben werden kann wird hier anstatt einem normalen Subject
 * ein BehaviourSubject verwendet.
 */

@Injectable({
    providedIn: 'root'
})
export class DashboardSettingsService {
    myMethod$: Observable<settings>;
    private myMethodSubject = new BehaviorSubject(new settings());

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    settingsVerteilen(data) {
        // An alle verteilen die sich am Service angemeldet haben
        this.myMethodSubject.next(data);
    }


}