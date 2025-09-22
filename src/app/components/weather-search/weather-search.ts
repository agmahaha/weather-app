import { Component, input, signal} from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { globalSearch } from '../../signal';

@Component({
  selector: 'app-weather-search',
  imports: [
    InputGroupModule, 
    InputGroupAddonModule, 
    ButtonModule],
  templateUrl: './weather-search.html',
  styleUrl: './weather-search.css'
})
export class WeatherSearch {
  menu: any;

  // ngOnInit() : void {
  //   console.log(globalSearch());
  // }

  setCity(cityVal: string){
    if(!cityVal){
      return;
    }
    
    globalSearch.set(cityVal);
    //console.log("save: " + globalSearch());
  }
}
