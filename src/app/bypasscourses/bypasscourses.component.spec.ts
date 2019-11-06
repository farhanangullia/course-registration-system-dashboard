import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BypasscoursesComponent } from './bypasscourses.component';

describe('BypasscoursesComponent', () => {
  let component: BypasscoursesComponent;
  let fixture: ComponentFixture<BypasscoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BypasscoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BypasscoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
