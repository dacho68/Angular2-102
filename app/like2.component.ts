import {Component, Input,Output,  EventEmitter} from '@angular/core';
@Component({
    // this solution is more elegant
    selector: 'like2', 
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