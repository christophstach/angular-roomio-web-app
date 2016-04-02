import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FacebookService} from '../services/facebook.service';



@Component({
    selector: 'roomio-navigation',
    templateUrl: 'app/templates/navigation.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: []
})
export class NavigationComponent implements OnInit {
    private userPicture: string;

    constructor(private router: Router, private _facebookService: FacebookService) {

    }

    public ngOnInit() {
        this._facebookService.getMyPicture(32, 32).then((result) => {
            this.userPicture = result.data.url;
        });
    }

    /**
     * @param route
     * @returns {boolean}
     */
    public isRouteActive(route: string) {
        return this.router.isRouteActive(this.router.generate([route]));
    }
}