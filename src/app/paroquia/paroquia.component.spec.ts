import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParoquiaComponent } from './paroquia.component';

describe('ParoquiaComponent', () => {
  let component: ParoquiaComponent;
  let fixture: ComponentFixture<ParoquiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParoquiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParoquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
