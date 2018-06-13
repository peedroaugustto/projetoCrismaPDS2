import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjoComponent } from './sjo.component';

describe('SjoComponent', () => {
  let component: SjoComponent;
  let fixture: ComponentFixture<SjoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
