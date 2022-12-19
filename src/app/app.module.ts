import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { ErrorInterceptor } from 'src/_interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    NavigationComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule 
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS
    , useClass : ErrorInterceptor
    , multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
