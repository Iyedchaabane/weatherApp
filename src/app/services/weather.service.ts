import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherApiBaseUrl: string = 'https://weather-api99.p.rapidapi.com/weather';
  XRapidAPIHostHeaderName: string = 'X-RapidAPI-Host';
  XRapidAPIHostHeaderValue: string =  'weather-api99.p.rapidapi.com';
  XRapidAPIKeyHeaderName: string =  'X-RapidAPI-Key';
  XRapidAPIKeyHeaderValue: string =  '283b19d76fmshcdb3d78757de522p193dcajsnaee7b0b660f0';
  constructor(private http: HttpClient) { }

  getWetherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
        .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('city', cityName)
    });
  }
}
