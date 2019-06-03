import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _authService:AuthService) { }

  arregloVideosTendencias =[
    {
      miniatura: "../../assets/img/miniatures/sonic.jpg",
      titulo: "SONIC LA PELÍCULA Tráiler Español Latino DOBLADO (2019)",
      usuario: 'SensaCine TRAILERS',
      visualizaciones: '9,2 M',
      fecha: 'Hace 6 días'
    },
    {
      miniatura: '../../assets/img/miniatures/barcelona.jpg',
      titulo: 'FC Barcelona - Liverpool [3-0] | GOLES | Semifinal (IDA) | UEFA Champions League',
      usuario: 'FOX Sports Sur',
      visualizaciones: '7,1 M visualizaciones',
      fecha: 'Hace 4 días'
    },
    {
      miniatura: '../../assets/img/miniatures/respuesta.jpg',
      titulo: 'Becky G, Maluma - La Respuesta (Official Video)',
      usuario: 'Becky G',
      visualizaciones: '57 M visualizaciones',
      fecha: 'Hace 2 semanas'
    },
    {
      miniatura: '../../assets/img/miniatures/carnage.jpg',
      titulo: 'VENOM 2: CARNAGE (2020) Woody Harrelson Movie - Trailer Concept (HD)',
      usuario: 'Billy Crammer',
      visualizaciones: '6,9 M visualizaciones',
      fecha: 'Hace 6 horas'
    },
    {
      miniatura: '../../assets/img/miniatures/spiderman.jpg',
      titulo: 'SPIDER-MAN LEJOS DE CASA Tráiler Español DOBLADO (2019)',
      usuario: 'SensaCine TRAILERS',
      visualizaciones: '4 M visualizaciones',
      fecha: 'Hace 3 horas'
    }
  ]

  arregloVideosRecomendados =[
    {
      miniatura: "../../assets/img/miniatures/bella.jpg",
      titulo: "La Bella y La Bestia | #TeLoResumoAsiNomas 240",
      usuario: 'Te lo resumo',
      visualizaciones: '876 mil visualizaciones',
      fecha: 'Hace 2 días'
    },
    {
      miniatura: '../../assets/img/miniatures/arcore.jpg',
      titulo: 'Augmented Images Setup | ARCore',
      usuario: "Hey! Let's Code",
      visualizaciones: '1,4 mil visualizaciones',
      fecha: 'Hace 4 meses'
    },
    {
      miniatura: '../../assets/img/miniatures/dbz.jpg',
      titulo: 'Dragon Ball Z - Best Music Part 2 HD',
      usuario: 'Yahren',
      visualizaciones: '79 mil visualizaciones',
      fecha: 'Hace 1 mes'
    },
    {
      miniatura: '../../assets/img/miniatures/vida.jpg',
      titulo: 'EL BANANERO - LA VIDA DESPUES DEL TRAILERAZO',
      usuario: 'EL BANANERO OFICIAL',
      visualizaciones: '6,4 M visualizaciones',
      fecha: 'Hace 3 años'
    },
    {
      miniatura: '../../assets/img/miniatures/stones.jpg',
      titulo: 'The Rolling Stones -- Doom And Gloom (Lyric Video)',
      usuario: 'The Rolling Stones',
      visualizaciones: '20 M visualizaciones',
      fecha: 'Hace 6 años'
    }
  ]

  ngOnInit() {
  }

  log(){
    console.log("it works!")
    this._authService.log()
  }

}

class Video{
    
  constructor(
    public miniatura:string,
    public titulo:string,
    public usuario:string,
    public visualizaciones:number,
    public fecha:Date
  ){   
  }

}
