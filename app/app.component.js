System.register(['angular2/core', 'angular2/http', './components/navigation.component', './components/accommodation-card.component'], function(exports_1, context_1) {
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
    var core_1, http_1, navigation_component_1, accommodation_card_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (accommodation_card_component_1_1) {
                accommodation_card_component_1 = accommodation_card_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    this.accommodations = [];
                    this.http = http;
                    this.requestNewData();
                }
                AppComponent.prototype.like = function () {
                    this.accommodations.shift();
                    this.requestNewData();
                };
                AppComponent.prototype.dislike = function () {
                    this.accommodations.shift();
                    this.requestNewData();
                };
                AppComponent.prototype.requestNewData = function () {
                    var _this = this;
                    if (this.accommodations.length < 2) {
                        //  this.accommodations = this.accommodations.concat(ROOMS.slice(0))
                        this.http.get('app/data/accommodation.json')
                            .subscribe(function (result) {
                            _this.accommodations = result.json();
                        });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'roomio-app',
                        templateUrl: 'app/app.component.html',
                        directives: [navigation_component_1.NavigationComponent, accommodation_card_component_1.AccommodationCardComponent],
                        viewProviders: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map