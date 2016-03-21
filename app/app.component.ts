import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Accommodation} from './models/accomodation.model';

import {NavigationComponent} from './components/navigation.component';
import {AccommodationCardComponent} from './components/accommodation-card.component';


@Component({
    selector: 'roomio-app',
    templateUrl: 'app/app.component.html',
    directives: [NavigationComponent, AccommodationCardComponent],
    viewProviders: [HTTP_PROVIDERS]
})
export class AppComponent {
    private accommodations: Accommodation[] = [];
    private http: Http;

    constructor(http: Http) {

        this.http = http;
        this.requestNewData();
    }

    like() {
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