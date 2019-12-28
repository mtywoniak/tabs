import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOfActionComponent } from './course-of-action.component';

describe('CourseOfActionComponent', () => {
  let component: CourseOfActionComponent;
  let fixture: ComponentFixture<CourseOfActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseOfActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseOfActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
