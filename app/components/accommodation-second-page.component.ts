import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {Accommodation} from '../models/accomodation.model';
import {AccommodationService} from '../services/accommodation.service';

@Component({
    selector: 'roomio-accommodation-second-page',
    templateUrl: 'app/templates/accommodation-second-page.component.html',
    inputs: ['accommodation'],
    directives: [ROUTER_DIRECTIVES]
})
export class AccommodationSecondPageComponent implements OnInit{
    private accommodation: Accommodation;
    private errorMessage: string;

    /**
     *
     * @param _accommodationService
     */
    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _accommodationService: AccommodationService) {
    }

    /**
     *
     */
    ngOnInit() {
        this.getAccommodation();
    }

    /**
     *
     */
    getAccommodation() {
        let id:number = parseInt(this._routeParams.get('id'));

        this._accommodationService
            .getAccommodationById(id)
            .then(
                accommodation => this.accommodation = accommodation,
                error =>  this.errorMessage = <any>error
            );

    }

    /**
     *
     */
    private debug() {
        console.log(this.accommodation);
    }
}