
import  {WeatherResponse} from "../types/wheather";
const API_KEY = '365b6a53ebe9cf12fa8c3d09e4eca865';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const  fetchWeatherByCity = async (city:string):Promise<WeatherResponse> =>{
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    if(!response.ok){
        throw new Error("Failed to Fetch Weather Data")
    }
    const data:WeatherResponse = await response.json();
    return data;
}