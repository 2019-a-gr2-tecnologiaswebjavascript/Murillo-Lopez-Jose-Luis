import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';

  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas")
  ];

  arregloFloresJS = [
    {
      nombre:"Papitas",
      descripcion:"A lo bestia"
    },
    {
      nombre:"Carnitas",
      descripcion:"Gorditas"
    }
  ]

  cambioChela(evento:boolean){
    console.log("Llego a chela: ", evento)
  }

  cambioBiela(evento:boolean){
    console.log("Llego a biela: ", evento)
  }

}

class Flor{
    
  constructor(
    public nombre:string,
    public descripcion:string
  ){   
  }

}
