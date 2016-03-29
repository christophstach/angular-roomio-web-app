import {Component, OnInit} from 'angular2/core';

import {Accommodation} from '../models/accomodation.model';
import {AccommodationService} from '../services/accommodation.service';
import {AccommodationCardComponent} from './accommodation-card.component';


@Component({
    selector: 'roomio-game',
    templateUrl: 'app/templates/game.component.html',
    directives: [AccommodationCardComponent],
    providers: [AccommodationService]
})
export class GameComponent implements OnInit {
    private accommodations: Accommodation[] = [];
    private errorMessage: string;


    constructor(private _accommodationService: AccommodationService) {
    }

    ngOnInit() {
        this.getAccommodations();
    }

    like() {
        this.accommodations.shift();
        this.getAccommodations();
    }

    dislike() {
        this.accommodations.shift();
        this.getAccommodations();
    }

    getAccommodations() {
        if(this.accommodations.length < 2) {
            this._accommodationService
                .getAccommodations()
                .then(
                    accommodations => this.accommodations = accommodations,
                    error =>  this.errorMessage = <any>error
                );
        }
    }
}