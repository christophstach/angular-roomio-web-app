import {Injectable} from 'angular2/core';
import {User} from '../models/user.model';
import {Response, Http} from 'angular2/http';


@Injectable()
export class UserService {
    private _userUrl = 'app/data/user.json';

    constructor(private http: Http) {}

    public getUsers(): Promise<User[]> {
        return this.http.get(this._userUrl)
            .map((res: Response) => res.json())
            .toPromise();
    }

    public getUserById(id: number): Promise<User> {
        return this.http.get(this._userUrl)
            .map((res: Response) => res.json()[0])
            .toPromise();
    }

    public getUsersSlowly() {
        return new Promise<User[]>(resolve =>
            setTimeout(() => resolve(), 2000) // 2 seconds
        );
    }
}