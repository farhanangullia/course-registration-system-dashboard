import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteachercourseComponent } from './viewteachercourse.component';

describe('ViewteachercourseComponent', () => {
  let component: ViewteachercourseComponent;
  let fixture: ComponentFixture<ViewteachercourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteachercourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteachercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
