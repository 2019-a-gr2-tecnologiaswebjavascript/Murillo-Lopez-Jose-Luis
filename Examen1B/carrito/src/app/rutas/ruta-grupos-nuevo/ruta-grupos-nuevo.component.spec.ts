import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGruposNuevoComponent } from './ruta-grupos-nuevo.component';

describe('RutaGruposNuevoComponent', () => {
  let component: RutaGruposNuevoComponent;
  let fixture: ComponentFixture<RutaGruposNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGruposNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGruposNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
