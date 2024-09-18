import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalcoloComponent } from './calcolo/calcolo.component';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        CalcoloComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      NgSelectModule,
      ], 
        providers: [
        provideClientHydration(),
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
