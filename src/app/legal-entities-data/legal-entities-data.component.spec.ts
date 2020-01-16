import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEntitiesDataComponent } from './legal-entities-data.component';

describe('LegalEntitiesDataComponent', () => {
  let component: LegalEntitiesDataComponent;
  let fixture: ComponentFixture<LegalEntitiesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalEntitiesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalEntitiesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
