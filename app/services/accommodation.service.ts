import {Injectable}             from 'angular2/core';
import {Http, HTTP_PROVIDERS}   from 'angular2/http';


import {Accommodation}          from '../models/accomodation.model';
import {Response}               from 'angular2/http';


@Injectable()
export class AccommodationService {
    private _accommodationsUrl = 'app/data/accommodation.json';
    private _accommodationUrl = 'app/data/accommodation.json';

    constructor(private http: Http) {

    }

    private handleError (error: any) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.message || error.json().error || 'Server error');
    }

    public getAccommodations(): Promise<Accommodation[]> {
        return this.http.get(this._accommodationsUrl)
            .toPromise()
            .then(res => <Accommodation[]> res.json())
            .catch(this.handleError);
    }

    public getAccommodationById(id: number): Promise<Accommodation> {
        return this.http.get(this._accommodationUrl + '?id=' + id)
            .toPromise()
            .then(res => <Accommodation> res.json()[0])
            .catch(this.handleError);
    }

    public getAccommodationsSlowly() {
        return new Promise<Accommodation[]>(resolve =>
            setTimeout(() => resolve(), 2000) // 2 seconds
        );
    }
}