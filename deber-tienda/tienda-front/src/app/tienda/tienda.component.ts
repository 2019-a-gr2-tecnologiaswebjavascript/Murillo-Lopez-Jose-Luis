import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  @Input()
  titulo

  @Input()
  id

  @Input()
  productos

  constructor() { }

  ngOnInit() {
    console.log(this.productos)
  }

}
