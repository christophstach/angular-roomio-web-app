import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {NavigationComponent} from './components/navigation.component';
import {GameComponent} from './components/game.component';
import {MatchesComponent} from './components/matches.component';
import {EditProfileComponent} from './components/edit-profile.component';
import {ProfileComponent} from './components/profile.component';
import {SignUpComponent} from './components/sign-up.component';
import {LoginComponent} from './components/login.component';
import {LogoutComponent} from './components/logout.component';
import {UserComponent} from './components/user.component';
import {AccommodationComponent} from './components/accommodation.component';

@Component({
    selector: 'roomio-app',
    templateUrl: 'app/app.component.html',
    directives: [NavigationComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path:'/',                      name: 'Game',           component: GameComponent, useAsDefault: true},
    {path:'/matches',               name: 'Matches',        component: MatchesComponent},
    {path:'/edit-profile',          name: 'EditProfile',    component: EditProfileComponent},
    {path:'/profile',               name: 'Profile',        component: ProfileComponent},
    {path:'/sign-up',               name: 'SignUp',         component: SignUpComponent},
    {path:'/login',                 name: 'Login',          component: LoginComponent},
    {path:'/logout',                name: 'Logout',         component: LogoutComponent},
    {path:'/accommodation/:id',     name: 'Accommodation',  component: AccommodationComponent},
    {path:'/user/:id',              name: 'User',           component: UserComponent}
])
export class AppComponent {
}