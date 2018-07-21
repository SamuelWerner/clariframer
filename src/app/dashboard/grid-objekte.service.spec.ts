import { TestBed, inject } from '@angular/core/testing';

import { GridObjekteService } from './grid-objekte.service';

describe('GridObjekteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridObjekteService]
    });
  });

  it('should be created', inject([GridObjekteService], (service: GridObjekteService) => {
    expect(service).toBeTruthy();
  }));
});
