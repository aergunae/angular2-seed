System.register(['angular2/core', './contact-form.component', './subscription.component'], function(exports_1, context_1) {
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
    var core_1, contact_form_component_1, subscription_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (subscription_component_1_1) {
                subscription_component_1 = subscription_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "title",
                        isFavorite: true
                    };
                    this.isFavorite = false;
                    // title=" Angular App"; 
                    this.imageUrl = "http://lorempixel.com/400/200/";
                    this.class = "glyphicon glyphicon-star-empty";
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "isFavorite", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        directives: [contact_form_component_1.ContactFormComponent, subscription_component_1.SubscriptionComponent],
                        template: " \n<subscription-form></subscription-form>\n\n\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map