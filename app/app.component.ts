// core of angular2. always need it
import {Component} from 'angular2/core';


// import the components
import {FavoriteComponent} from './favorite.component';

// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'my-app',

    template: `<h1>Welcome to Angular 2 - 102</h1>
               My Favorite with style:  <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
               <br>               
               No style : <span class="glyphicon glyphicon-star"></span>            
              `,
    // including those components
   directives:[ FavoriteComponent ]
})

export class AppComponent {
  post = {
      title: "Title",
      isFavorite: true
  }
  
  onFavoriteChange($event){
      console.log($event)
  }
  
}