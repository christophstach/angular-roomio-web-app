import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';



@Component({
    selector: 'roomio-navigation',
    templateUrl: 'app/templates/navigation.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {
    constructor(private router: Router) {}

    /**
     * @param route
     * @returns {boolean}
     */
    public isRouteActive(route: string) {
        return this.router.isRouteActive(this.router.generate([route]));
    }
}