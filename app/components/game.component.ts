import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Accommodation} from '../models/accomodation.model';

import {AccommodationCardComponent} from './accommodation-card.component';


@Component({
    selector: 'roomio-game',
    templateUrl: 'app/templates/game.component.html',
    directives: [AccommodationCardComponent],
    providers: [HTTP_PROVIDERS]
})
export class GameComponent {
    private accommodations: Accommodation[] = [];
    private http: Http;

    constructor(http: Http) {

        this.http = http;
        this.requestNewData();
    }

    like() {
        if(Math.round(Math.random() * 10) + 1 === 5) {
            alert('It is a Match');
        }
        this.accommodations.shift();
        this.requestNewData();
    }

    dislike() {
        this.accommodations.shift();
        this.requestNewData();
    }

    requestNewData() {
        if(this.accommodations.length < 2) {
            //  this.accommodations = this.accommodations.concat(ROOMS.slice(0))
            this.http.get('app/data/accommodation.json')
                .subscribe(result => {
                    this.accommodations = result.json();
                });
        }
    }
}