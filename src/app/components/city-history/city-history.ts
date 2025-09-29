import { Component, input } from '@angular/core';
import { globalStore } from '../../signal';
import { CityCard } from '../city-card/city-card';
import { IWeather } from '../../models/weather.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-city-history',
  imports: [CityCard, ButtonModule],
  templateUrl: './city-history.html',
  styleUrl: './city-history.css'
})
export class CityHistory {
  readonly cityStore = globalStore
  readonly weatherCache = input<Record<string, IWeather>>({});

  clearHistory(){
    globalStore.set([]);
  }
}
