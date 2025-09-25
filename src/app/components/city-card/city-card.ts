import { Component, input, inject, resource, effect} from '@angular/core';
import { Weather } from '../../services/weather/weather';
import { IWeather } from '../../models/weather.model';

@Component({
  selector: 'app-city-card',
  imports: [],
  templateUrl: './city-card.html',
  styleUrl: './city-card.css'
})
export class CityCard {
  private readonly weatherService = inject(Weather);
  readonly cityInfo = input<IWeather>();
  readonly cityVal = input.required<string>(); 
  constructor() {
    effect(() =>{
      console.log(this.cityVal());
    })

  }
  public readonly weatherDataResource = resource({
    loader: () => {
      return this.weatherService.getWeather(this.cityVal());
    }
  });
}
