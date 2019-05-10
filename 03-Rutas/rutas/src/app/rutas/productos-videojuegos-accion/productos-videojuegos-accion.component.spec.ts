import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVideojuegosAccionComponent } from './productos-videojuegos-accion.component';

describe('ProductosVideojuegosAccionComponent', () => {
  let component: ProductosVideojuegosAccionComponent;
  let fixture: ComponentFixture<ProductosVideojuegosAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosVideojuegosAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosVideojuegosAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
