import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  sliderOpts = {
    centeredSlides: true,
    zoom: false,
    slidesPerView: 1,
    spaceBetween: 0
  };

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

}
