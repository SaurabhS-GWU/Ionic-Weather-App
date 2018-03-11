import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
	
  apiKey = '585a3700358f7557';
  url; 
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider'); 
    this.url = 'http://api.wunderground.com/api/b1355e80ae302c94/conditions/q'; 
  } 

  getWeather(city, state){
  	return this.http.get(this.url + '/' +state+ '/'+city + '.json')
  	.map(res => res); 
  }

}
