import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosNuevoComponent } from './ruta-productos-nuevo.component';

describe('RutaProductosNuevoComponent', () => {
  let component: RutaProductosNuevoComponent;
  let fixture: ComponentFixture<RutaProductosNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
