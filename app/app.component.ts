// core of angular2. always need it
import {Component} from 'angular2/core';


// import the components
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {Like2Component} from './like2.component';
// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'my-app',

    template: `<h1>Welcome to Angular 2 - 102</h1>
               My Favorite with style:  <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
               <br>               
               No style : <span class="glyphicon glyphicon-star"></span> <br>
               Exercise 1 : Like Component
               <like [count]="tweet.likeCount" [isLike]="tweet.isLike" ></like><br>
               Mosh's solution :
               <like2  [totalLikes]="tweet.likeCount" [iLike]="tweet.isLike"></like2>
              `,
    // including those components
   directives:[ FavoriteComponent,LikeComponent,Like2Component ]
})

export class AppComponent {
  post = {
      title: "Title",
      isFavorite: true
  };
  
  tweet = {
      likeCount: 10,
      isLike: false
  }
  
  onFavoriteChange($event){
      console.log($event)
  }
}