import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessesViewComponent } from './processes-view.component';

describe('ProcessesViewComponent', () => {
  let component: ProcessesViewComponent;
  let fixture: ComponentFixture<ProcessesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
