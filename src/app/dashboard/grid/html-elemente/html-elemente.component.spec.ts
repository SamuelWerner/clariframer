import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlElementeComponent } from './html-elemente.component';

describe('HtmlElementeComponent', () => {
  let component: HtmlElementeComponent;
  let fixture: ComponentFixture<HtmlElementeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlElementeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlElementeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
