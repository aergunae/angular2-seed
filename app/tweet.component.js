System.register(['angular2/core', './tweet.service', './like.component'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "data", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "<div class=\"media\">\n <div class=\"media-left\">\n     <a href=\"#\"> \n      <img class=\"media-object\" src=\"{{data.imageUrl}}\" alt=\"...\">\n    </a>\n </div>\n <div class=\"media-body\">\n    <span class=\"author\">{{data.author}}</span>  <span class=\"handle\">{{data.handle}}</span> <br/>\n    {{data.body}}<br/> \n    <like [totalLikes]=\"data.totalLikes\" [isLiked]=\"data.iLike\"></like>\n </div>\n </div>",
                        styles: [" \n.liked{\ncolor:deeppink\n     }\n.author{\n  font-weight:bold;\n  font-size:17px\n}\n.handle{ \n  color:#d3d3d3;\n  font-weight:bold\n  height:25px\n}\nimg{\n  radius:3\n}\n"],
                        providers: [tweet_service_1.TweetService],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.Component.js.map