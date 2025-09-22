import { Component, inject, resource, effect } from '@angular/core';
import { Weather } from '../../services/weather/weather';
import { SampleCard } from '../../components/sample-card/sample-card';
import { WeatherCard } from '../../components/weather-card/weather-card';
import { WeatherSearch } from "../../components/weather-search/weather-search";
import { globalSearch } from '../../signal';

@Component({
  selector: 'app-home',
  imports: [
    SampleCard,
    WeatherCard,
    WeatherSearch
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  //injector
  private readonly weatherService = inject(Weather);

  //signal
  constructor() {
    effect(() => {
      globalSearch();
      // console.log("home2: " + searchValue);
      this.weatherDataResource.reload();
    })
  }

  public readonly weatherDataResource = resource({
    loader: () => {
      return this.weatherService.getWeather(globalSearch());
    }
  });

  
}
