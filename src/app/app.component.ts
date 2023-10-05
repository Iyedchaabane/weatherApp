import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wetherApp';
  constructor(private WeatherService : WeatherService){}
  cityName: string = "Tunis";
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }
  

  onSubmit(){
      this.getWeatherData(this.cityName);
      this.cityName="";
  }
  private getWeatherData(cityName: string ){
    this.WeatherService.getWetherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response ; 
        console.log(response);
      }
    });
  }
}
