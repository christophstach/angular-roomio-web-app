import {Injectable}                         from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response}     from 'angular2/http';
import {Observable}                         from 'rxjs/Observable';


@Injectable()
export class FacebookService {
    public _accessToken: string;

    constructor(private http: Http) {
    }

    public init(): Promise<IFacebook> {
        return new Promise((resolve, reject) => {
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = '//connect.facebook.net/en_US/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));


            window.fbAsyncInit = function() {
                FB.init({
                    appId      : '499396993577530',
                    xfbml      : false,
                    cookie     : true,
                    version    : 'v2.5'
                });

                resolve(FB);
            };
        });
    }

    public login(): Promise<IFacebookAuthResponse> {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                if(response.status == 'connected') {
                    this._accessToken = response.authResponse.accessToken;
                    resolve(response);
                } else {
                    reject(response);
                }
            }, {scope: 'public_profile,email'});
        });
    }

    public getMe(): Promise<IFacebookAPIResponse> {
        return new Promise((resolve, reject) => {
            FB.api('/me', {
                access_token: this._accessToken
            }, (response) => {
                resolve(response);
            });
        });
    }

    public getMyPicture(width: number = 32, height: number = 32): Promise<IFacebookAPIResponse> {
        return new Promise((resolve, reject) => {
            FB.api('/me/picture', {
                access_token: this._accessToken,
                width: width,
                height: height
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