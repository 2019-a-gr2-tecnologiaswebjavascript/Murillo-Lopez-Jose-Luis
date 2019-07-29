import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors = [
    {
      names: 'Jose',
      lastNames: 'Murillo',
      birthDate: '07/01/98',
      numberBooks: '2',
      ecuatorian: true
    },
    {
      names: 'Andrea',
      lastNames: 'Murillo',
      birthDate: '07/01/98',
      numberBooks: 2,
      ecuatorian: false
    }
  ]
  searchText = ''

  constructor() {

  }
  
  ngOnInit() {
  }

  search(event){
    this.searchText = event.detail.value
  }

}
