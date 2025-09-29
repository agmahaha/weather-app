import { Component, inject, resource, effect, signal, computed } from '@angular/core';
import { Weather } from '../../services/weather/weather';
import { WeatherCard } from '../../components/weather-card/weather-card';
import { WeatherSearch } from "../../components/weather-search/weather-search";
import { globalSearch, globalStore, globalUnit, backgroundMode } from '../../signal';
import { CityHistory } from "../../components/city-history/city-history";
import { IWeather } from '../../models/weather.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    WeatherCard,
    WeatherSearch,
    CityHistory,
    CommonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  //injector
  private readonly weatherService = inject(Weather);
  public readonly weatherCache = signal<Record<string, IWeather>>({});
  public backgroundMode = backgroundMode;

  public readonly isLoading = computed(() => this.weatherDataResource.isLoading());
  public readonly hasError = computed(() => !!this.weatherDataResource.error());
  public readonly errorMessage = computed(() => {
    const error = this.weatherDataResource.error();
    return error?.message || 'Something went wrong fetching weather data.';
  });
  public readonly weatherData = computed(() => {
    const data = this.weatherDataResource.value();
    const city = globalSearch();

    if (!city || !city.trim() || data === null) {
      return null;
    }

    return data;
  });

  //signal
  constructor() {
    effect(() => {
      globalSearch();
      globalUnit();
      this.weatherDataResource.reload();
    });

    effect(() => {
      const weatherData = this.weatherData();
      const hasError = this.hasError();
      const isLoading = this.isLoading();
      
      if (weatherData && !hasError && !isLoading) {

        const desc = weatherData.weather[0].description;

        if (desc.includes('cloud') || desc.includes('rain') || desc.includes('storm') ||desc.includes('night')){
          this.backgroundMode.set('dark');
        } else {
          this.backgroundMode.set('light');
        }
        const cityName = globalSearch().toLowerCase();
        const currentStore = globalStore();
        console.log(weatherData.weather[0].description)
        if (cityName && !currentStore.includes(cityName) && !this.weatherDataResource.value()?.error) {
          globalStore.update(prev => [cityName, ...prev].slice(0, 3));
        }

        if (cityName) {
          this.weatherCache.update(cache => ({
            ...cache,
            [cityName]: weatherData
          }));
        }

      } else if (hasError) {
        console.log("Weather API error occurred:", this.errorMessage());
      }

    })

    effect(() => {
      globalUnit();
      const cities = globalStore();
      setTimeout(() => {
        cities.forEach(city => {
          const currentSearch = globalSearch();
          if (city !== currentSearch) {
            console.log("Reloading weather for:", city);
            this.loadWeatherForCity(city);
          }
        });
      }, 100);
    });
  }

  private async loadWeatherForCity(city: string) {
    try {
      const weatherData = await this.weatherService.getWeather(city);
      this.weatherCache.update(cache => ({
        ...cache,
        [city]: weatherData
      }));
    } catch (error) {
      console.error(`Failed to load weather for ${city}:`, error);
      this.weatherCache.update(cache => {
        const newCache = { ...cache };
        delete newCache[city];
        return newCache;
      });
    }
  }

  public readonly weatherDataResource = resource({
    loader: async () => {

      const city = globalSearch();
      if (!city || !city.trim()) return null as any;

      try {
        return await this.weatherService.getWeather(city);
      } catch (err: any) {
        return {
          error: true,
          message: err.status === 404
            ? `City "${city}" not found`
            : err.status === 0
              ? `Network error`
              : `Unexpected error: ${err.message || err}`
        } as any;
      }
    },
  });
}
