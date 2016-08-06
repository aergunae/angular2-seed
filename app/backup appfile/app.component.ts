import {Component,Input} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './author.component'
import {FavoriteComponent} from './favorite.component'
import {ContactFormComponent} from './contact-form.component'
import {SubscriptionComponent} from './subscription.component'
@Component ({
selector:"my-app",
directives:[ContactFormComponent,SubscriptionComponent],
template:` 
<subscription-form></subscription-form>


`

})
// <contact-form></contact-form>


// @Component({
//     selector: 'my-app',
//     template: '<h1>Hello Angular 2</h1><courses></courses><authors></authors>',
//     directives:[CoursesComponent,AuthorComponent]
// })
//  <img src="{{imageUrl}}"/>


//  (click)='onClick()'
//style="cursor:pointer"
//{(isFavorite)}=true
//  

// @Component({  
//     selector:'my-app',
//     template:`
// <h1>{{post.title}}</h1>
//   <button class="btn btn-primary">Submit</button>
//  <favorite [isFavorite]="post.isFavorite"></favorite>
//     ` ,
//     directives:[FavoriteComponent]

// })
export class AppComponent {
    post ={
        title:"title",
        isFavorite:true
    }
    @Input() isFavorite=false;
// title=" Angular App"; 
 imageUrl="http://lorempixel.com/400/200/";
 
 class="glyphicon glyphicon-star-empty";
// onClick(){
    // this.isFavorite=!this.isFavorite;
    // if ( this.isFavorite) {
    //    this.class="glyphicon glyphicon-star";  
    // }
    // else{
    //        this.class="glyphicon glyphicon-star-empty";  
    // }

// }
 } 