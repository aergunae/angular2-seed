import  {Component,Input} from 'angular2/core';

@Component({
selector:'favorite',
template:`
<i 
class="glyphicon"
[class.glyphicon-star-empty]=!isFavorite
[class.glyphicon-star]=isFavorite
 (click)='onClick()'
style="cursor:pointer"
></i> 
    `,

})
export /**
 * FavoriteComponent
 */
class FavoriteComponent {
   @Input() isFavorite=false;
    onClick(){
        this.isFavorite=!this.isFavorite;

    }
}