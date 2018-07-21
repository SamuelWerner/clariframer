import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlAttributeComponent} from './html-attribute.component';

describe('HtmlAttributeComponent', () => {
    let component: HtmlAttributeComponent;
    let fixture: ComponentFixture<HtmlAttributeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HtmlAttributeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HtmlAttributeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
