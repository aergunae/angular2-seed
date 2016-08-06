import {Component} from 'angular2/core';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TweetsComponent} from './tweets.component';
import {BootstrapPanel} from './bootstrapPanel.component';
import {ZippyComponent} from './zippy.component';
import {SummaryPipe} from './summary.pipe';


//   <h3>{{title}}</h3>
//   <h3 [textContent]="title"> </h3>
@Component({
  selector: "my-app2",
  template: `
   <br/>
  {{course.title |lowercase}}
   <br/>
  {{course.rating |number}}
   <br/>
  {{course.students |number:'2.2-2'}}
   <br/>
  {{course.price | currency:'USD':true:'2.2-2'}}
   <br/>
  {{course.releaseDate | date:'MMM yyyy'}}
   <br/>
  {{course | json}}
   <br/>
  {{loremIpsum | Summary:1000 }}
   <br/>
   <br/>
    <ul class="nav nav-pills">
    <li [class.active]="viewMode=='map'"><a (click)="viewMode='map'">Map View </a></li>
    <li [class.active]="viewMode=='list'"><a (click)="viewMode='list'">List View </a></li>
         </ul>

         <div [ngSwitch]="viewMode">
<template [ngSwitchWhen]="'map'" >Map View Content</template>
<template [ngSwitchWhen]="'list'" ngSwitchDefault>List View Content</template>
         </div>

         <br/>
         <br/>
    <zippy title="hellooooooooo" [isOpen]="isOpen">
    <div class="heading" style="color:red">the content of who can see my stuff</div>
    </zippy>
    <zippy title="hellooooooooo" [isOpen]="isOpen">
    <div class="heading" style="color:red">the content of who can see my stuff</div>
    </zippy>
    
 <br/>
 <tweets></tweets>   <br/><br/><br/>
<vote></vote>

<like [isLiked]="isLiked" [totalLikes]="totalLikes"></like>
  <button class="btn btn-primary" [class.active]="isActive">Submit</button>
 <div (click)="onDivClick()">
   <button class="btn btn-primary" [class.active]="!isActive"
   (click)="onClick($event)"
   
   >Submit2</button>
   </div> 
   <input type="text" [value]="title" (input)="title=$event.target.value"/>
  preview:{{title}} <br/>
  <button (click)="title=''">clear</button>
  ` ,
  directives: [LikeComponent, VoteComponent, TweetsComponent, BootstrapPanel, ZippyComponent],
  pipes:[SummaryPipe]

})
export class App2Component {
 viewMode="map";
course={
title:"Angular 2 for Beginners",
rating:4.9745,
students:5981,
price:99.95,
releaseDate:new Date(2016,3,1),
  
}
loremIpsum="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


 
  title = "test title";
  isOpen = false;
  isActive = true;
  totalLikes = 10;
  isLiked = true;
  onClick($event) {
    $event.stopPropagation();
    console.log("button clicked", $event.clientX);
    // this.title=   "";
  }
  onDivClick() {
    console.log("div clicked");

  }

}   