import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = "Licoreria";

  @Input()
  textoBoton;
  
  @Input()
  nombreItem;

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo ' + this.nombreItem);
  }

}

/*
@DecoratorsClase() //->Funciones que se ejecutan antes de clases, atributos, constructores, metodos
class Usuario{
  @DecoratorAtributo()
  private nombre = 'Jose';
    
  constructor(@DecoratorsConstructor() nombre){

  }
  @DecoratorsMetodo()
  metodoPublico(){

  }

  private metodoPrivado(){

  }

  protected metodoProtected(){

  }

}
*/