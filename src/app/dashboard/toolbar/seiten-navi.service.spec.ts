import { TestBed, inject } from '@angular/core/testing';

import { SeitenNaviService } from './seiten-navi.service';

describe('SeitenNaviService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeitenNaviService]
    });
  });

  it('should be created', inject([SeitenNaviService], (service: SeitenNaviService) => {
    expect(service).toBeTruthy();
  }));
});
