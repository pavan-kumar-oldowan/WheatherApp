import  {View,Text,StyleSheet} from "react-native";
import React ,{useEffect,useState} from "react"
import {fetchWeatherByCity} from "../services/weatherApi";
import { WeatherResponse } from "@/types/wheather";
const HomeScreen:React.FC= ()=>{
    const [weather,setWeather] = useState<WeatherResponse|null>(null)
    const [Loading,setLoading] = useState(false);

    useEffect(()=>{
        const loadWeather = async()=>{
            try{
                const data = await fetchWeatherByCity("kadapa");
                setWeather(data);
                console.log("WeatherData:",data)
            }catch(e){
                console.log(e);
            }
            finally{
                setLoading(false);
            }
        } 
        loadWeather(); 

    },[])
    if(Loading){
        return(
            <View style={styles.container}>
            <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{weather?.name}</Text>
          <Text>Temperature: {weather?.main.temp}°C</Text>
          <Text>Condition: {weather?.weather[0].description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
       container:{
         flex:1,
         justifyContent:"center",
         alignItems:"center"
       },text:{
        fontSize:26,
        fontWeight:"bold"
       }
})
export default HomeScreen