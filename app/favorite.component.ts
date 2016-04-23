// core fo angular2 . always need it
// we import the Input function
import {Component, Input} from 'angular2/core';

// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'favorite', 
    template: `
        <span class="glyphicon" 
        [class.glyphicon-star-empty]="!isFavorite"
        [class.glyphicon-star]="isFavorite"
        (click)="onClick($event)" ></span>
    `,
    // including 
   directives:[ ],
   inputs: ['isFavorite']
})

export class FavoriteComponent {
  
  // we want to expose the isFavorite to public for binding
  isFavorite: boolean = false;   
  
  onClick($event){
      this.isFavorite = !this.isFavorite;
  }
  
}