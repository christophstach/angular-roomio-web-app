import {Injectable} from 'angular2/core';
import {Picture} from '../models/picture.model';
import {Response, Http} from 'angular2/http';


@Injectable()
export class PictureService {
    private _pictureUrl = 'app/data/picture.json';

    constructor(private http: Http) {}

    public gePictures(): Promise<Picture[]> {
        return this.http.get(this._pictureUrl)
            .map((res: Response) => res.json())
            .toPromise();
    }

    public getPictureById(id: number): Promise<Picture> {
        return this.http.get(this._pictureUrl)
            .map((res: Response) => res.json()[0])
            .toPromise();
    }

    public getPicturesSlowly() {
        return new Promise<Picture[]>(resolve =>
            setTimeout(() => resolve(), 2000) // 2 seconds
        );
    }
}