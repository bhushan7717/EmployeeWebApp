import { Component } from '@angular/core';
import { WeatherForecast } from 'src/_Models/weather-forecast';
import { WeatherService } from 'src/_services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {
  
  public ws : WeatherForecast[] | any;
  errorMsg : string = "";

  constructor(private weatherService : WeatherService){
        this.weatherService.getWeatherInfo().subscribe((data) => {
          this.ws = data;
          console.log(this.ws);
        }, error => {
          this.errorMsg = error;
        });
  }


}
