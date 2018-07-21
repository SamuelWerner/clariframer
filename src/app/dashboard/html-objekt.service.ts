import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs/index';
import {HTMLObjekt} from './html-objekte/HTMLObjekt';

/**
 * Created by Samuel Werner <samuel.werner@iem.thm.de>  on 21.05.2018
 */

@Injectable({
  providedIn: 'root'
})
export class HtmlObjektService {
  myMethod$: Observable<any>;
  private myMethodSubject = new BehaviorSubject<any>(new HTMLObjekt());

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  htmlObjektVerteilen(data) {
    // An alle verteilen die sich am Service angemeldet haben
    this.myMethodSubject.next(data);
  }
}
