import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LactanciaComponent } from './lactancia.component';

describe('LactanciaComponent', () => {
  let component: LactanciaComponent;
  let fixture: ComponentFixture<LactanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LactanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LactanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
