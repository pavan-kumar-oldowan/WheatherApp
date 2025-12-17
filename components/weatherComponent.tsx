import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { WeatherResponse } from "@/types/wheather";

interface WeatherCardProps{
    weather:WeatherResponse;
}

export const WeatherCard:React.FC<WeatherCardProps>=({weather})=>{

    return(
        <View style={styles.card}>
            <Text style={styles.city}>{weather.name}</Text>
            <Text style={styles.temp}>{weather.main.temp}°C</Text>
            <Text>{weather.weather[0].main}</Text>
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
      
})
