import { Component, OnInit} from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { globalSearch, globalUnit, globalStore } from '../../signal';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-weather-search',
  imports: [
    InputGroupModule, 
    InputGroupAddonModule, 
    ButtonModule,
    ToolbarModule,
    IconFieldModule,
    InputIconModule,
    SelectButtonModule,
    SplitButtonModule,
    FormsModule,],
  templateUrl: './weather-search.html',
  styleUrl: './weather-search.css'
})
export class WeatherSearch {

  setCity(cityVal: string){
    globalSearch.set(cityVal);
    const cityName = globalSearch().toLowerCase()
    if(globalStore().includes(cityName)){
      globalStore.update(prev => prev.filter(city => city != cityName));
      globalStore.update(prev => [cityName, ...prev].splice(0,3));
    }
  }

  onUnitChange(value: any) {
  this.selectedButton = value;
  globalUnit.set(value.value);  
}

  
  selectButtonValues: any = [{ name: 'Celsius', value: 'C'}, { name: 'Farenheit', value: 'F' }, { name: 'Kelvin', value:'K' } ];
  selectedButton = this.selectButtonValues[0];
}
