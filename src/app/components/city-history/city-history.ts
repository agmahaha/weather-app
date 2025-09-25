import { Component } from '@angular/core';
import { globalStore } from '../../signal';
import { CityCard } from '../city-card/city-card';

@Component({
  selector: 'app-city-history',
  imports: [CityCard],
  templateUrl: './city-history.html',
  styleUrl: './city-history.css'
})
export class CityHistory {
  readonly cityStore = globalStore
}
