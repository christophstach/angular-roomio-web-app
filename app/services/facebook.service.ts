import {Injectable}                         from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response}     from 'angular2/http';
import {Observable}                         from 'rxjs/Observable';


@Injectable()
export class FacebookService {
    public _accessToken: string;

    constructor(private http: Http) {
    }

    public login(): Promise<IFacebookAuthResponse> {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                if(response.status == 'connected') {
                    this._accessToken = response.authResponse.accessToken;
                    setTimeout(() => {
                        resolve(response);
                    }, 2000);
                } else {
                    reject(response);
                }
            }, {scope: 'public_profile,email'});
        });
    }

    public getMe(): Promise<IFacebookAPIResponse> {
        return new Promise((resolve, reject) => {
            console.log(this._accessToken);
            FB.api('/me', {
                access_token: this._accessToken
            }, (response) => {
                resolve(response);
            });
        });
    }

    private handleError (error: any) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.message || error.json().error || 'Server error');
    }
}