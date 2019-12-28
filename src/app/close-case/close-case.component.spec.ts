import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCaseComponent } from './close-case.component';

describe('CloseCaseComponent', () => {
  let component: CloseCaseComponent;
  let fixture: ComponentFixture<CloseCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
