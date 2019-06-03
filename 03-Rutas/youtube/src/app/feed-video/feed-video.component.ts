import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-video',
  templateUrl: './feed-video.component.html',
  styleUrls: ['./feed-video.component.css']
})
export class FeedVideoComponent implements OnInit {
  
  @Input()
  miniatura
  @Input()
  titulo
  @Input()
  usuario
  @Input()
  visualizaciones
  @Input()
  fecha


  constructor() { }

  ngOnInit() {
  }

}


