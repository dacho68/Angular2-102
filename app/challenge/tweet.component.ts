
import {Component, Input} from '@angular/core';
import {Like2Component} from '../like2.component';

@Component({
    selector: 'tweet',
    template: `
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{ data.imageUrl }}">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">
        {{ data.author }} <span class="handle">{{ data.handle }}</span>
    </h4>
    {{ data.body }}
    <div>
        <like2 [totalLikes]="data.totalLikes" [iLike]="data.iLike"></like2>
    </div>
  </div>
</div>    
    `,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
    directives: [Like2Component]
})
export class TweetComponent {
    constructor(){
        console.log(this.data);
    }
    @Input() data;
}