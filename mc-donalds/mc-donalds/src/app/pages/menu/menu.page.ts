import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Inicio',
      url: '/menu/first',
      iconUrl: 'assets/icon/home.png'
    },
    {
      title: 'Restaurantes',
      url: '/menu/second',
      iconUrl: 'assets/icon/rest.png'
    }
  ]

  selectedPath = ''

  constructor(private router: Router) {
    this.router.events.subscribe((event : RouterEvent) => {
      this.selectedPath = event.url
    });
  }

  ngOnInit() {
  }

}
