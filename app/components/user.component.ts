import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {User} from '../models/user.model';

@Component({
    selector: 'roomio-user',
    templateUrl: 'app/templates/user.component.html',
    inputs: ['user'],
    viewProviders: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class UserComponent {
    private http: Http;
    private user: User;

    /**
     * @param http
     */
    constructor(http: Http) {
        this.http = http;
    }
}