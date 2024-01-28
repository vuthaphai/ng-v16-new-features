import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './app/app-route';


bootstrapApplication(AppComponent, {
    providers: [provideRouter(APP_ROUTE)]
})
  .catch(err => console.error(err));
