import {Component} from 'angular2/core'
import {TweetService} from './tweet.service'
import {TweetComponent} from './tweet.Component'
@Component({
    selector: 'tweets',
    template: `
<div *ngFor="#tweet of tweets">
    <tweet [data]="tweet"></tweet> <br/>
</div>
    `,
    providers: [TweetService],
    directives: [TweetComponent]
})
export class TweetsComponent {
    mediaHeading = '';
    like = 0;
    onclick(isLiked) {
        this.like = isLiked ? 1 : -1;
    }
    tweets;
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }

}
