System.register(['angular2/core', './like.component', './vote.component', './tweets.component', './bootstrapPanel.component', './zippy.component', './summary.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, like_component_1, vote_component_1, tweets_component_1, bootstrapPanel_component_1, zippy_component_1, summary_pipe_1;
    var App2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (bootstrapPanel_component_1_1) {
                bootstrapPanel_component_1 = bootstrapPanel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            //   <h3>{{title}}</h3>
            //   <h3 [textContent]="title"> </h3>
            App2Component = (function () {
                function App2Component() {
                    this.viewMode = "map";
                    this.course = {
                        title: "Angular 2 for Beginners",
                        rating: 4.9745,
                        students: 5981,
                        price: 99.95,
                        releaseDate: new Date(2016, 3, 1),
                    };
                    this.loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
                    this.title = "test title";
                    this.isOpen = false;
                    this.isActive = true;
                    this.totalLikes = 10;
                    this.isLiked = true;
                }
                App2Component.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log("button clicked", $event.clientX);
                    // this.title=   "";
                };
                App2Component.prototype.onDivClick = function () {
                    console.log("div clicked");
                };
                App2Component = __decorate([
                    core_1.Component({
                        selector: "my-app2",
                        template: "\n   <br/>\n  {{course.title |lowercase}}\n   <br/>\n  {{course.rating |number}}\n   <br/>\n  {{course.students |number:'2.2-2'}}\n   <br/>\n  {{course.price | currency:'USD':true:'2.2-2'}}\n   <br/>\n  {{course.releaseDate | date:'MMM yyyy'}}\n   <br/>\n  {{course | json}}\n   <br/>\n  {{loremIpsum | Summary:1000 }}\n   <br/>\n   <br/>\n    <ul class=\"nav nav-pills\">\n    <li [class.active]=\"viewMode=='map'\"><a (click)=\"viewMode='map'\">Map View </a></li>\n    <li [class.active]=\"viewMode=='list'\"><a (click)=\"viewMode='list'\">List View </a></li>\n         </ul>\n\n         <div [ngSwitch]=\"viewMode\">\n<template [ngSwitchWhen]=\"'map'\" >Map View Content</template>\n<template [ngSwitchWhen]=\"'list'\" ngSwitchDefault>List View Content</template>\n         </div>\n\n         <br/>\n         <br/>\n    <zippy title=\"hellooooooooo\" [isOpen]=\"isOpen\">\n    <div class=\"heading\" style=\"color:red\">the content of who can see my stuff</div>\n    </zippy>\n    <zippy title=\"hellooooooooo\" [isOpen]=\"isOpen\">\n    <div class=\"heading\" style=\"color:red\">the content of who can see my stuff</div>\n    </zippy>\n    \n <br/>\n <tweets></tweets>   <br/><br/><br/>\n<vote></vote>\n\n<like [isLiked]=\"isLiked\" [totalLikes]=\"totalLikes\"></like>\n  <button class=\"btn btn-primary\" [class.active]=\"isActive\">Submit</button>\n <div (click)=\"onDivClick()\">\n   <button class=\"btn btn-primary\" [class.active]=\"!isActive\"\n   (click)=\"onClick($event)\"\n   \n   >Submit2</button>\n   </div> \n   <input type=\"text\" [value]=\"title\" (input)=\"title=$event.target.value\"/>\n  preview:{{title}} <br/>\n  <button (click)=\"title=''\">clear</button>\n  ",
                        directives: [like_component_1.LikeComponent, vote_component_1.VoteComponent, tweets_component_1.TweetsComponent, bootstrapPanel_component_1.BootstrapPanel, zippy_component_1.ZippyComponent],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App2Component);
                return App2Component;
            }());
            exports_1("App2Component", App2Component);
        }
    }
});
//# sourceMappingURL=app2.component.js.map