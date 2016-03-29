import {bootstrap}              from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS}   from 'angular2/http';
import {Router}                 from 'angular2/router';

import {AppComponent}           from './app.component'
import                          'rxjs/Rx';


bootstrap(AppComponent, [HTTP_PROVIDERS]);