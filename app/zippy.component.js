System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.title = "";
                }
                ZippyComponent.prototype.onClick = function () {
                    this.isOpen = !this.isOpen;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "isOpen", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n\n<div class=\"zippy\" style=\"border:solid 1px black; cursor:pointer;width:500px\">\n<div style=\"cursor:pointer\"\n(click)=\"onClick()\"\n>{{title}}\n<i\nstyle=\"float:right\"\n\nclass=\"glyphicon\"\n[ngClass]=\"{\n    'glyphicon-chevron-up':isOpen,\n    'glyphicon-chevron-down':!isOpen\n}\">\n \n\n</i>\n</div>\n<div *ngIf=\"isOpen\">\n<ng-content se></ng-content>\n</div>\n\n</div>\n\n\n\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map