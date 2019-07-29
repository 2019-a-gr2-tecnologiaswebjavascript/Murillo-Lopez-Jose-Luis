import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Author } from '../dto/Author';
import { AuthorHttpService } from '../services/author-http/author-http.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors : Author[] 
  searchText = ''

  async presentActionSheet(index) {
    const actionSheet = await this.actionSheetController.create({
      header: `${this.authors[index].names} ${this.authors[index].lastNames}`,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Ver libros',
        icon: 'book',
        handler: () => {
          this.toProducts(this.authors[index].id)
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  toProducts(id){
    var parametros = {
      queryParams:{
        'idAutor' : id
      }
    }
    this._router.navigate(['books'],parametros)
  }

  constructor(public actionSheetController: ActionSheetController,
    private readonly _router : Router,
    private readonly _autorHttp : AuthorHttpService) {

  }
  
  ngOnInit() {
    var authors$ = this._autorHttp.buscarTodos()
    authors$.subscribe(
      (authorList) => {
        this.authors = authorList
      },
      (error) =>{
        console.log(error)
      }
    )
  }

  search(event){
    this.searchText = event.detail.value
  }

}
