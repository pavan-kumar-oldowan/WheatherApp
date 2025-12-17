import  {View,Text,StyleSheet, TextInput,TouchableOpacity,ActivityIndicator} from "react-native";
import React ,{useState,useEffect}from "react"
import {fetchWeatherByCity} from "../services/weatherApi";
import { WeatherResponse } from "@/types/wheather";
import { WeatherCard } from "@/components/weatherComponent";
const HomeScreen:React.FC= ()=>{
    const [weather,setWeather] = useState<WeatherResponse|null>(null)
    const [Loading,setLoading] = useState<boolean>(false);
    const [city,setCity] = useState<string>("London");
    const [error,setError] = useState<string>("");

    const getWeather = async()=>{
         if(!city.trim()){
            setError("Please Enter a City Name");
            return;
         }
         setLoading(true);
         setError("");

      try{
        const data = await fetchWeatherByCity(city);
        setWeather(data);
        console.log("WeatherData:",data);
         }
       catch(e){
            console.log(e)
         }
       finally{
            setLoading(false)
         }
    }

    useEffect(()=>{
         getWeather()
    },[])

    return (
        <View style={styles.container}>
          <Text style={styles.text}>Weather App</Text>
          <TextInput style={styles.input} 
                    placeholder="enter a city" 
                    value={city} 
                    onChangeText={(text:string)=>setCity(text)}
            />
           <TouchableOpacity style={styles.button} onPress={getWeather}>
               <Text style={styles.buttontext}>Search</Text>
           </TouchableOpacity>
           {Loading && <ActivityIndicator size="large"/>}
           {error && <View style={styles.errorBox}>
                      <Text style={styles.error}>{error}</Text>
                      </View>}
                
                
           {weather && !Loading && <WeatherCard weather={weather} />}


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
       },
       input:{
         borderWidth:1,
         borderColor:"#ccc",
         borderRadius:8,
         padding:10,
         marginBottom:10

       },
       button:{
          backgroundColor:'#007AFF',
          borderRadius:8,
          padding:10,
          alignItems:"center"
       },
       buttontext:{
           color: '#fff',
           fontWeight: 'bold',
       },
       error:{
           color:"#cc0000",
           textAlign:"center",
           marginTop:10
       },
       result:{
        marginTop:20,
        alignItems:"center"
       },
       city:{
        fontSize:20,
        fontWeight:"bold"
       },
        errorBox: {
        backgroundColor: '#ffe6e6',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        },


})
export default HomeScreen