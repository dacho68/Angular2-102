import {Component, Input,Output,  EventEmitter} from '@angular/core';
@Component({
    selector: 'voter', 

    template: `
    <div class="voter">
        <i class="glyphicon glyphicon-menu-up vote-button" 
        [class.hightlighted]="myVote == 1"
        (click)="upVote()" >
        </i> 
        
        <span class="vote-count">{{voteCount + myVote }}</span>
        
        <i class="glyphicon glyphicon-menu-down vote-button" 
        [class.hightlighted]="myVote == -1"
        (click)="downVote()" >
        </i>
    </div>    
   `, 
    
    styles:[`
        .voter{
            width: 20px;
            text-align: center;
            color: #999;
            display: inline-block;
        }
        
        .vote-count{
           font-size: 1.2em;   
        }
        
        .vote-button{
           cursor: pointer; 
        }
        
        .hightlighted {
          font-weight: bold;
          color: orange;
        }       
        
    `],
    // including 
   directives:[],
})

export class VoterComponent {
  
  @Input() voteCount :number = 0;
  @Input() myVote :number = 0;
  @Output() vote = new EventEmitter();
   
  upVote(){
      if(this.myVote == 1)
        return;
      this.myVote++; 
      this.vote.emit({myVote: this.myVote})
  }
  
 downVote(){
      if(this.myVote == -1)
        return;
      this.myVote--;
      this.vote.emit({myVote: this.myVote})
  }  
}