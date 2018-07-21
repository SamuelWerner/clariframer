import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLObjektDetailsComponent } from './html-objekt-details.component';

describe('HTMLObjektDetailsComponent', () => {
  let component: HTMLObjektDetailsComponent;
  let fixture: ComponentFixture<HTMLObjektDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTMLObjektDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLObjektDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
