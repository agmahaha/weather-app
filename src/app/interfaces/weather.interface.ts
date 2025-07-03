export interface IWeatherService {
    getWeather(city: string): Promise<any>;
}
