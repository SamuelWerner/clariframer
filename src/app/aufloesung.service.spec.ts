import {inject, TestBed} from '@angular/core/testing';

import {AufloesungService} from './aufloesung.service';

describe('AufloesungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AufloesungService]
    });
  });

  it('should be created', inject([AufloesungService], (service: AufloesungService) => {
    expect(service).toBeTruthy();
  }));
});
