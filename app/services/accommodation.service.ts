import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import {Accommodation} from '../models/accomodation.model';


@Injectable()
export class AccommodationService {
    private _accommodationsUrl = 'http://localhost:3501/accommodations';
    private _accommodationUrl = 'http://localhost:3501/accommodations/{id}';

    constructor(private http: Http) {
    }

    private handleError (error: any) {
        return Promise.reject(error.message || error.json().error || 'Server error');
    }

    public getAccommodations(): Promise<Accommodation[]> {
        return this.http.get(this._accommodationsUrl)
            .toPromise()
            .then(res => <Accommodation[]> res.json())
            .catch(this.handleError);
    }

    public getAccommodationById(id: number): Promise<Accommodation> {
        return this.http.get(this._accommodationUrl.replace(/\{id}/, id.toString()))
            .toPromise()
            .then(res => <Accommodation> res.json())
            .catch(this.handleError);
    }

    public getAccommodationsSlowly() {
        return new Promise<Accommodation[]>(resolve =>
            setTimeout(() => resolve(), 2000) // 2 seconds
        );
    }
}