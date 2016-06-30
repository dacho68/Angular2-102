import {Component, Input,Output,  EventEmitter} from '@angular/core';

@Component({
    selector: 'like', 
    template: `
            <i class="glyphicon glyphicon-heart" 
            [class.deeppink]="isLike"
            [class.gray]="!isLike"
            (click)="onClick()" >
            </i>  {{count}}`, 
    
    styles:[`
        .deeppink{
            color: deeppink;
            cursor: pointer 
        }
        .gray{
            color: #ccc;
            cursor: pointer 
        }
    `],
   directives:[],
})

export class LikeComponent {
  
  @Input() isLike: boolean = false;
  @Input() count : number = 0;
   
  onClick(){
    this.isLike = !this.isLike;
    if (this.isLike){
        this.count +=  1;
    }
    else{
        this.count -= 1;
    }
  }
}