import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {NavigationComponent} from './components/navigation.component';
import {GameComponent} from './components/game.component';
import {MatchesComponent} from './components/matches.component';
import {EditProfileComponent} from './components/edit-profile.component';
import {ProfileComponent} from './components/profile.component';
import {SignUpComponent} from './components/sign-up.component';
import {LoginComponent} from './components/login.component';
import {LogoutComponent} from './components/logout.component';
import {UserComponent} from './components/user.component';
import {AccommodationFirstPageComponent} from './components/accommodation-first-page.component';
import {AccommodationSecondPageComponent} from './components/accommodation-second-page.component';

import {AccommodationService} from './services/accommodation.service';
import {FacebookService} from './services/facebook.service';

import {SignIn} from './models/form/sign-in.form.model';





@Component({
    selector: 'roomio-app',
    templateUrl: 'app/app.component.html',
    directives: [NavigationComponent, ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AccommodationService,
        FacebookService
    ]
})
@RouteConfig([
    {path:'/game',                      name: 'Game',                           component: GameComponent},
    {path:'/matches',                   name: 'Matches',                        component: MatchesComponent},
    {path:'/edit-profile',              name: 'EditProfile',                    component: EditProfileComponent},
    {path:'/profile',                   name: 'Profile',                        component: ProfileComponent},
    {path:'/sign-up',                   name: 'SignUp',                         component: SignUpComponent},
    {path:'/login',                     name: 'Login',                          component: LoginComponent},
    {path:'/logout',                    name: 'Logout',                         component: LogoutComponent},
    {path:'/accommodation/:id',         name: 'AccommodationFirstPage',         component: AccommodationFirstPageComponent},
    {path:'/accommodation/:id/more',    name: 'AccommodationSecondPage',        component: AccommodationSecondPageComponent},
    {path:'/user/:id',                  name: 'User',                           component: UserComponent}
])
export class AppComponent implements OnInit {
    private isSignedIn: boolean = false;
    private isInitialized: boolean = false;
    private model: SignIn = {
        emailAddress: '',
        password: '',
        rememberMe: true
    };

    constructor(private router: Router, private _facebookService: FacebookService) {
    }

    public ngOnInit() {
        this._facebookService.init().then((result) => {
            this.isInitialized = true;
        });
    }

    private navigateToDefaultView() {
        this.router.navigateByUrl('/game');
    }

    private signIn(event) {
        this.isSignedIn = true;

        this.navigateToDefaultView();
    }

    private facebookSignIn() {
        this._facebookService.login().then((result) => {
            this.isSignedIn = true;

            this.navigateToDefaultView();
        });
    }
}