import { Component, input} from '@angular/core';
import { IWeather } from '../../models/weather.model';

@Component({
  selector: 'app-city-card',
  imports: [],
  templateUrl: './city-card.html',
  styleUrl: './city-card.css'
})
export class CityCard {
  readonly cityInfo = input<IWeather>();
  readonly cityVal = input.required<string>(); 
}
