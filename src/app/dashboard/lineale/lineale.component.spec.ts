import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LinealeComponent} from './lineale.component';

describe('LinealeComponent', () => {
  let component: LinealeComponent;
  let fixture: ComponentFixture<LinealeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinealeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
