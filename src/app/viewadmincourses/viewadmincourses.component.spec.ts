import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadmincoursesComponent } from './viewadmincourses.component';

describe('ViewadmincoursesComponent', () => {
  let component: ViewadmincoursesComponent;
  let fixture: ComponentFixture<ViewadmincoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewadmincoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadmincoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
