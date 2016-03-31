import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FacebookService} from '../services/facebook.service';



@Component({
    selector: 'roomio-navigation',
    templateUrl: 'app/templates/navigation.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [FacebookService]
})
export class NavigationComponent {
    private _facebookService;
    constructor(private router: Router, _facebookService: FacebookService) {
        this._facebookService = _facebookService;
    }

    /**
     * @param route
     * @returns {boolean}
     */
    public isRouteActive(route: string) {
        return this.router.isRouteActive(this.router.generate([route]));
    }

    private facebookLogin(): void {
        this._facebookService.login().then((result) => {

        });
    }
}