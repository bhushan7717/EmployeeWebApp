import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from 'src/_Models/weather-forecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { 

  }

  public getWeatherInfo() : Observable<WeatherForecast[]> {
      return this.http.get<WeatherForecast[]>('http://localhost:5000/WeatherForecast');
  }
}
