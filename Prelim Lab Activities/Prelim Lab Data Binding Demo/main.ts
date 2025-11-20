import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // We changed 'App' to 'AppComponent'

bootstrapApplication(AppComponent, appConfig) // We changed 'App' to 'AppComponent'
  .catch((err) => console.error(err));
