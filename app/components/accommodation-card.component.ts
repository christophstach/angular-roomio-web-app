import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Accommodation} from '../models/accomodation.model';

@Component({
    selector: 'roomio-accommodation-card',
    templateUrl: 'app/templates/accommodation-card.component.html',
    viewProviders: [HTTP_PROVIDERS],
    inputs: ['accommodation']
})
export class AccommodationCardComponent {
    private http: Http;
    private accommodation: Accommodation;

    constructor(http: Http) {
        this.http = http;
    }
}