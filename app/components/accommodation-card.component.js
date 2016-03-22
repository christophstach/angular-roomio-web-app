System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AccommodationCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AccommodationCardComponent = (function () {
                /**
                 * @param http
                 */
                function AccommodationCardComponent(http) {
                    this.http = http;
                }
                /**
                 * @param accommodationDiameter
                 * @param roomMateDiameter
                 * @param roomMateMateBottomPosition
                 * @returns {{left: number, right: number, bottom: number, top: number}}
                 */
                AccommodationCardComponent.prototype.getCoordinateOfRoomMate = function (accommodationDiameter, roomMateDiameter, roomMateMateBottomPosition) {
                    var roomMateLeftPosition;
                    var c = accommodationDiameter / 2;
                    var a = roomMateMateBottomPosition - c;
                    var b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                    roomMateLeftPosition = Math.round(c + b - roomMateDiameter / 2);
                    return {
                        left: roomMateLeftPosition,
                        right: roomMateDiameter - roomMateLeftPosition,
                        bottom: roomMateMateBottomPosition - roomMateDiameter / 2,
                        top: accommodationDiameter - (roomMateMateBottomPosition - roomMateDiameter / 2)
                    };
                };
                AccommodationCardComponent = __decorate([
                    core_1.Component({
                        selector: 'roomio-accommodation-card',
                        templateUrl: 'app/templates/accommodation-card.component.html',
                        inputs: ['accommodation'],
                        viewProviders: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AccommodationCardComponent);
                return AccommodationCardComponent;
            })();
            exports_1("AccommodationCardComponent", AccommodationCardComponent);
        }
    }
});
//# sourceMappingURL=accommodation-card.component.js.map