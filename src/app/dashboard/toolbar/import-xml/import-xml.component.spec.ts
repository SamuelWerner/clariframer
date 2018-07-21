import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportXmlComponent } from './import-xml.component';

describe('ImportXmlComponent', () => {
  let component: ImportXmlComponent;
  let fixture: ComponentFixture<ImportXmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportXmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
