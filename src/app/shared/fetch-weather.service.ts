import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchWeatherService {

  countrycode = "singapore"

  constructor(private http: HttpClient) { 
  }
  getWeatherData(){
      return this.http.get<any>(environment.weatherUrl + this.countrycode + "&appid=" + environment.WEATHER_API_KEY).toPromise();
  }
}
