import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {importProvidersFrom} from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule) // Important for Angular Material
  ]
}).catch(err => console.error(err));
