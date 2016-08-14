// core fo angular2 . always need it
// we import the Input decorator and the EventEmitter
import {Component, Input,Output,  EventEmitter} from '@angular/core';

// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'favorite', 
    // using templateURL will cost you one more HTTP request
    templateUrl: 'app/favorite.template.html', 
    
    styles:[`
        .glyphicon-star{
            color: orange;
        }
    `],
    // including 
   directives:[ ],
  // inputs: ['isFavorite:is-favorite'],  // we want to expose the is-favorite as the public input interface but keep the isFavorite property as the private
})

export class FavoriteComponent {
  
  @Input('is-favorite') isFavorite: boolean = false; // using the Input decorator syntax - it's equivalent the inputs metadata - you can delete the metadata
  
  @Output() change = new EventEmitter();
   
  onClick($event){
      this.isFavorite = !this.isFavorite;
      this.change.emit({newValue: this.isFavorite});
  }
  
}