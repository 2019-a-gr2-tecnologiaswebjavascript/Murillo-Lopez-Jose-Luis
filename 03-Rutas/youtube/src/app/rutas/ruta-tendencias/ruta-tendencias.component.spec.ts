import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaTendenciasComponent } from './ruta-tendencias.component';

describe('RutaTendenciasComponent', () => {
  let component: RutaTendenciasComponent;
  let fixture: ComponentFixture<RutaTendenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaTendenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaTendenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
