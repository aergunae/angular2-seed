System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LikeService;
    return {
        setters:[],
        execute: function() {
            LikeService = (function () {
                function LikeService() {
                    this.isLiked = false;
                }
                LikeService.prototype.sendLike = function () {
                    this.isLiked = this.isLiked;
                };
                return LikeService;
            }());
            exports_1("LikeService", LikeService);
        }
    }
});
//# sourceMappingURL=like.service.js.map