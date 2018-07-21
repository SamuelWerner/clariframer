import { TestBed, inject } from '@angular/core/testing';

import { HtmlObjektService } from './html-objekt.service';

describe('HtmlObjektService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlObjektService]
    });
  });

  it('should be created', inject([HtmlObjektService], (service: HtmlObjektService) => {
    expect(service).toBeTruthy();
  }));
});
