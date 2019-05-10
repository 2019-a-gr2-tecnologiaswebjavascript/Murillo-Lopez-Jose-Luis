import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVideojuegosAventurasComponent } from './productos-videojuegos-aventuras.component';

describe('ProductosVideojuegosAventurasComponent', () => {
  let component: ProductosVideojuegosAventurasComponent;
  let fixture: ComponentFixture<ProductosVideojuegosAventurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosVideojuegosAventurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosVideojuegosAventurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
