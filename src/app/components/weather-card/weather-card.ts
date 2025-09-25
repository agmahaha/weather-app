import { Component, input } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { IWeather } from '../../models/weather.model';
import { globalUnit } from '../../signal';

@Component({
  selector: 'app-weather-card',
  imports: [
    SplitButtonModule,
    SplitterModule,
    PanelModule,
    AccordionModule,
  ],
  templateUrl: './weather-card.html',
})
export class WeatherCard {
  readonly weatherData = input<IWeather>();

  get unitSymbol(): string {
    switch (globalUnit()) {
      case 'C': return '°C';
      case 'F': return '°F';
      case 'K': return 'K'
      default: return 'C';
    }
  }

  get speedSymbol(): string {
    switch (globalUnit()) {
      case 'K': return 'mph'
      default: return 'km/h';
    }
  }

}
