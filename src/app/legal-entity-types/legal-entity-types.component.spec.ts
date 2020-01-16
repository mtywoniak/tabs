import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEntityTypesComponent } from './legal-entity-types.component';

describe('LegalEntityTypesComponent', () => {
  let component: LegalEntityTypesComponent;
  let fixture: ComponentFixture<LegalEntityTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalEntityTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalEntityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
