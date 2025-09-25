import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { IWeatherService } from '../../interfaces/weather.interface';
import { IWeather } from '../../models/weather.model';
import { globalSearch, globalUnit } from '../../signal';

@Injectable({
  providedIn: 'root'
})
export class Weather implements IWeatherService {

  private readonly http = inject(HttpClient);
  private readonly apiKey = environment.weatherApiKey;
  private readonly baseUrl = environment.weatherBaseUrl;
  private unitMeas = "&units=metric";
  

  getWeather(city: string): Promise<IWeather> {
    if(globalUnit() == 'C') {
      this.unitMeas = "&units=metric";
    }
    else if(globalUnit() == 'F'){
      this.unitMeas = "&units=imperial";
    }
    else{
      this.unitMeas = "";
    }
    return lastValueFrom(this.http.get<IWeather>(`${this.baseUrl}?q=${city}&appid=${this.apiKey}${this.unitMeas}`));
  }

}
