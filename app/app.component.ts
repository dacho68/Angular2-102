// core of angular2. always need it
import {Component} from 'angular2/core';


// import the components
import {FavoriteComponent} from './favorite.component';

// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'my-app',

    template: `<h1>Welcome to Angular 2 - 102</h1>
               My Favorite : <favorite [isFavorite]="post.isFavorite"></favorite>
              `,
    // including those components
   directives:[ FavoriteComponent ]
})

export class AppComponent {
  post = {
      title: "Title",
      isFavorite: true
  }
  
}