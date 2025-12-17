import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { WeatherResponse } from "@/types/wheather";

interface WeatherCardProps{
    weather:WeatherResponse;
}
const getWeatherIcon = (condition: string): string => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return '☀️';
    case 'clouds':
      return '☁️';
    case 'rain':
      return '🌧️';
    case 'snow':
      return '❄️';
    default:
      return '🌤️';
  }
};
export const WeatherCard:React.FC<WeatherCardProps>=({weather})=>{
      const icon= getWeatherIcon(weather.weather[0].main)
    return(
        <View style={styles.card}>
            <Text style={styles.city}>{weather.name}</Text>
            <Text style={styles.temp}>{weather.main.temp}°C</Text>
            <Text style={styles.icon}>{icon}</Text>
            <Text>Humidity:{weather.main.humidity}%</Text>
            <Text>Wind:{weather.wind.speed}</Text>
        </View>
    )

}
const styles= StyleSheet.create({

     card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  icon:{
    fontSize:50,
    marginVertical:10
  }
      
})
