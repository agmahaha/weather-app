import { Component, input } from '@angular/core';
import { globalStore } from '../../signal';
import { CityCard } from '../city-card/city-card';
import { IWeather } from '../../models/weather.model';

@Component({
  selector: 'app-city-history',
  imports: [CityCard],
  templateUrl: './city-history.html',
  styleUrl: './city-history.css'
})
export class CityHistory {
  readonly cityStore = globalStore
  readonly weatherCache = input<Record<string, IWeather>>({});
}
