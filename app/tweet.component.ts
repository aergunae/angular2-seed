import {Component, Input} from 'angular2/core'
import {TweetService} from './tweet.service'
import {LikeComponent} from './like.component'


@Component({
  selector: 'tweet',
  template: `<div class="media">
 <div class="media-left">
     <a href="#"> 
      <img class="media-object" src="{{data.imageUrl}}" alt="...">
    </a>
 </div>
 <div class="media-body">
    <span class="author">{{data.author}}</span>  <span class="handle">{{data.handle}}</span> <br/>
    {{data.body}}<br/> 
    <like [totalLikes]="data.totalLikes" [isLiked]="data.iLike"></like>
 </div>
 </div>`,
  styles: [` 
.liked{
color:deeppink
     }
.author{
  font-weight:bold;
  font-size:17px
}
.handle{ 
  color:#d3d3d3;
  font-weight:bold
  height:25px
}
img{
  radius:3
}
`],

  providers: [TweetService],
  directives: [LikeComponent]
})
export class TweetComponent {
  @Input() data;
}

