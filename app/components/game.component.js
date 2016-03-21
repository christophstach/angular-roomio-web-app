System.register(['angular2/core', 'angular2/http', './accommodation-card.component'], function(exports_1, context_1) {
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
    var core_1, http_1, accommodation_card_component_1;
    var GameComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (accommodation_card_component_1_1) {
                accommodation_card_component_1 = accommodation_card_component_1_1;
            }],
        execute: function() {
            GameComponent = (function () {
                function GameComponent(http) {
                    this.accommodations = [];
                    this.http = http;
                    this.requestNewData();
                }
                GameComponent.prototype.like = function () {
                    if (Math.round(Math.random() * 10) + 1 === 5) {
                        alert('It is a Match');
                    }
                    this.accommodations.shift();
                    this.requestNewData();
                };
                GameComponent.prototype.dislike = function () {
                    this.accommodations.shift();
                    this.requestNewData();
                };
                GameComponent.prototype.requestNewData = function () {
                    var _this = this;
                    if (this.accommodations.length < 2) {
                        //  this.accommodations = this.accommodations.concat(ROOMS.slice(0))
                        this.http.get('app/data/accommodation.json')
                            .subscribe(function (result) {
                            _this.accommodations = result.json();
                        });
                    }
                };
                GameComponent = __decorate([
                    core_1.Component({
                        selector: 'roomio-game',
                        templateUrl: 'app/templates/game.component.html',
                        directives: [accommodation_card_component_1.AccommodationCardComponent],
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GameComponent);
                return GameComponent;
            }());
            exports_1("GameComponent", GameComponent);
        }
    }
});
//# sourceMappingURL=game.component.js.map