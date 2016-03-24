import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {Accommodation} from '../models/accomodation.model';

@Component({
    selector: 'roomio-accommodation',
    templateUrl: 'app/templates/accommodation.component.html',
    inputs: ['accommodation'],
    viewProviders: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class AccommodationComponent {
    private http: Http;
    private accommodation: Accommodation;

    /**
     * @param http
     */
    constructor(http: Http) {
        this.http = http;
    }
}