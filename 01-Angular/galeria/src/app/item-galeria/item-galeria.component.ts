import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioBiela:EventEmitter<boolean> = new EventEmitter()

  url = "https://http2.mlstatic.com/biela-de-motor-original-peugeot-207-14-nafta-D_NQ_NP_782765-MLA26076182164_092017-F.jpg"

  notas = [1,2,3,4,5,6,7,8,9,10];

  color = "rojo"

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur')
  }

  cambiarImagen(){
    const bielas = "https://http2.mlstatic.com/biela-de-motor-original-peugeot-207-14-nafta-D_NQ_NP_782765-MLA26076182164_092017-F.jpg"
    const chelas = "https://media-cdn.tripadvisor.com/media/photo-s/09/0f/ad/dd/chelas.jpg"
    if (this.url == bielas){
      this.url = chelas
      this.cambioChela.emit(true);
      this.color= "chela";
    }else{
      this.url = bielas
      this.cambioBiela.emit(true);
      this.color = "biela"
  }


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