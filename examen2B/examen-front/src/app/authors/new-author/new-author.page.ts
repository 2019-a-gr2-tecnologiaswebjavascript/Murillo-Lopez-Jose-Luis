import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.page.html',
  styleUrls: ['./new-author.page.scss'],
})
export class NewAuthorPage implements OnInit {

  names
  lastNames
  birthDate
  numberBooks
  ecuatorian

  constructor() { }

  ngOnInit() {
  }

  newAuthor(form){
    console.log(this.birthDate)
  }

}

