import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from '../../fetch-weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  WeatherData:any;

  constructor(private fetchWeatherService : FetchWeatherService) { }

  ngOnInit(): void {
    this.getWeatherData()
  }

  getWeatherData(){
    this.fetchWeatherService.getWeatherData().then((res:any)=>{
      if(res){
        this.setWeatherData(res)
      }
    })                    
  
                            
  }

  setWeatherData(data:any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime()< sunsetTime.getTime())
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);

  }

}
