import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSuscripcionesComponent } from './ruta-suscripciones.component';

describe('RutaSuscripcionesComponent', () => {
  let component: RutaSuscripcionesComponent;
  let fixture: ComponentFixture<RutaSuscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSuscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSuscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
