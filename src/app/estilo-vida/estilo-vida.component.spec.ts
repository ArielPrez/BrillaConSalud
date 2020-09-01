import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloVidaComponent } from './estilo-vida.component';

describe('EstiloVidaComponent', () => {
  let component: EstiloVidaComponent;
  let fixture: ComponentFixture<EstiloVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstiloVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstiloVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
