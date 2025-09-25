import { Component, inject, resource, effect } from '@angular/core';
import { Weather } from '../../services/weather/weather';
import { SampleCard } from '../../components/sample-card/sample-card';
import { WeatherCard } from '../../components/weather-card/weather-card';
import { WeatherSearch } from "../../components/weather-search/weather-search";
import { globalSearch, globalUnit } from '../../signal';
import { CityHistory } from "../../components/city-history/city-history";

@Component({
  selector: 'app-home',
  imports: [
    WeatherCard,
    WeatherSearch,
    CityHistory
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
      globalUnit();
      this.weatherDataResource.reload();
    })
  }

  public readonly weatherDataResource = resource({
    loader: () => {
      return this.weatherService.getWeather(globalSearch());
    }
  });

  
}
