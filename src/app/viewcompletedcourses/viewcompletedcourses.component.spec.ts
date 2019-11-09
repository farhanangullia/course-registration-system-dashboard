import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompletedcoursesComponent } from './viewcompletedcourses.component';

describe('ViewcompletedcoursesComponent', () => {
  let component: ViewcompletedcoursesComponent;
  let fixture: ComponentFixture<ViewcompletedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcompletedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcompletedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
