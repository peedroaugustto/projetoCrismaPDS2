import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SntritaComponent } from './sntrita.component';

describe('SntritaComponent', () => {
  let component: SntritaComponent;
  let fixture: ComponentFixture<SntritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SntritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SntritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
