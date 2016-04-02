import {bootstrap}              from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS}   from 'angular2/http';
import {Router}                 from 'angular2/router';
import {enableProdMode}         from 'angular2/core';

import {AppComponent}           from './app.component'
import                          'rxjs/Rx';

//enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS]);