import {bootstrap}      from 'angular2/platform/browser'
import {Http}           from 'angular2/http';
import {Router}         from 'angular2/router'

import {AppComponent}   from './app.component'


bootstrap(AppComponent, [Http]);