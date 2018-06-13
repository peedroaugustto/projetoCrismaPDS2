import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjpComponent } from './mjp.component';

describe('MjpComponent', () => {
  let component: MjpComponent;
  let fixture: ComponentFixture<MjpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
