import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Coordinate} from '../shared/models/coordinate.model';
import {Accommodation} from '../models/accomodation.model';

@Component({
    selector: 'roomio-accommodation-card',
    templateUrl: 'app/templates/accommodation-card.component.html',
    inputs: ['accommodation'],
    viewProviders: [HTTP_PROVIDERS]
})
export class AccommodationCardComponent {
    private http: Http;
    private accommodation: Accommodation;

    /**
     * @param http
     */
    constructor(http: Http) {
        this.http = http;
    }

    /**
     * @param accommodationDiameter
     * @param roomMateDiameter
     * @param roomMateMateBottomPosition
     * @returns {{left: number, right: number, bottom: number, top: number}}
     */
    private getCoordinateOfRoomMate(
        accommodationDiameter: number,
        roomMateDiameter: number,
        roomMateMateBottomPosition: number): Coordinate {

        var roomMateLeftPosition: number;
        var c: number = accommodationDiameter / 2;
        var a: number = roomMateMateBottomPosition - c;
        var b: number = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));

        roomMateLeftPosition = Math.round(c + b -  roomMateDiameter / 2);

        return {
            left: roomMateLeftPosition,
            right: roomMateDiameter - roomMateLeftPosition,
            bottom: roomMateMateBottomPosition - roomMateDiameter / 2,
            top: accommodationDiameter - (roomMateMateBottomPosition - roomMateDiameter / 2)
        };
    }
}