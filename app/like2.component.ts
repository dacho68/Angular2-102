import {Component, Input,Output,  EventEmitter} from 'angular2/core';

// this is new to Angular 2.0
@Component({
    // this solution is more elegant
    selector: 'like2', 
    // using templateURL will cost you one more HTTP request
    template: `
            <i class="glyphicon glyphicon-heart" 
            [class.high-lighted]="iLike"
            (click)="onClick()" >
            </i> <span> {{totalLikes}} </span>
            `, 
    
    styles:[`
        .glyphicon-heart{
            color: #ccc;
            cursor: pointer
        }
        .high-lighted{
            color: deeppink;   
        }
    `],
    // including 
   directives:[],
})

export class Like2Component {
  
  @Input() iLike: boolean = false;
  @Input() totalLikes :  number = 0;
   
  onClick(){
      this.iLike = !this.iLike;
      this.totalLikes +=  this.iLike ? 1 : -1;
  }
}