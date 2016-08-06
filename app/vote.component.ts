import {Component,Input} from 'angular2/core';

@Component({
    selector:'vote',
    template:`
   <div style="width:20px;text-aling:center;margin-left:6px"><i class="glyphicon glyphicon-menu-up"
    (click)="upVote()"
    [class.voted]="isUpVoted"
    ></i>
     {{totalVotes}} 
    <i class="glyphicon glyphicon-menu-down"
    (click)="downVote()"
    [class.voted]="isDownVoted"
    ></i></div> 
   <br/> `,
   styles:[` .voted{
       color:orange
   }
   
   `]
}) 
export /**
 * VoteComponent
 */
class VoteComponent {
   totalVotes=12;
  isUpVoted=false;
  isDownVoted=false;
   upVote(){
if(this.isDownVoted){
    this.isDownVoted=false; 
    this.totalVotes++;
}
else {
this.totalVotes+=this.isUpVoted?0:1;
this.isUpVoted=true;
}
   }
     downVote(){
         if (this.isUpVoted) {
             this.isUpVoted=false;
             this.totalVotes--;
         }
         else {
this.totalVotes-=this.isDownVoted?0:1;
this.isDownVoted=true;

         }


   }
}