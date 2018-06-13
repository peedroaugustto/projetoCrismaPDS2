import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizComponent } from './matriz.component';

describe('MatrizComponent', () => {
  let component: MatrizComponent;
  let fixture: ComponentFixture<MatrizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
