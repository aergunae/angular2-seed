import {Component,Input}  from 'angular2/core'
@Component ({
selector:'zippy',
template:`

<div class="zippy" style="border:solid 1px black; cursor:pointer;width:500px">
<div style="cursor:pointer"
(click)="onClick()"
>{{title}}
<i
style="float:right"

class="glyphicon"
[ngClass]="{
    'glyphicon-chevron-up':isOpen,
    'glyphicon-chevron-down':!isOpen
}">
 

</i>
</div>
<div *ngIf="isOpen">
<ng-content se></ng-content>
</div>

</div>



`


})
export class ZippyComponent{
@Input( ) title="";
@Input( ) isOpen;
onClick(){
this.isOpen=!this.isOpen;

}
}