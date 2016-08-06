import {Component, Input} from 'angular2/core'
@Component({
    selector: 'like',
    template: `
<i class="glyphicon glyphicon-heart"
[class.liked]="isLiked"
 
(click)="onClick()"
></i>{{totalLikes}}
<br/><br/><br/> 
`,
    styles: [`
.glyphicon-heart{
    color:#ccc
}
.glyphicon-heart.liked{
    color:deeppink
}
.glyphicon-heart:hover{
    cursor:pointer
}
`]
})

export /** 
 * LikeComponent
 */
    class LikeComponent {
    @Input() totalLikes = 0;
    @Input() isLiked = false;
    onClick() {
        this.isLiked = !this.isLiked;

        this.totalLikes += this.isLiked ? 1 : -1;

    }
}