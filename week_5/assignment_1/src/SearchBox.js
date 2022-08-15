import {useState, useEffect} from "react";
// import SearchFormat from "./SearchFormat";

export default function SearchBox() {

    const [weather, setData] = useState();
    const [flag, setFlag] = useState(true);
    let [temp, setTemp] = useState('null')
    let [condition, setCondition] = useState('null')
    //const key = '92b52cf461021048a3e2b7ab6b8bafb5'
    const key = 'HBqpxR3nuKyUj8YOMXw24A1Mh3HZC6Nf'

    let [city, setCity] = useState('Phoenix, AZ')
  
    useEffect(() => {
  
      async function getData() {
        let noSpaces = city.replace(/ /g, '');
        let formattedCityName = noSpaces.toLowerCase()
        //let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formattedCityName}&appid=${key}`)
        let response = await fetch(`http://dataservice.accuweather.com/locations/v1/search?q=${formattedCityName}&apikey=${key}`)
        let data = await response.json()
        let newKey = data[0].Key
        let response2 = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${newKey}?apikey=${key}`)
        let data2 = await response2.json()
        console.log(data2)
        setTemp(data2[0].Temperature.Imperial.Value)
        setCondition(data2[0].WeatherText)
    }
    getData();

    }, [flag]);

    const handleChange = e => {
        setCity(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setFlag(!flag)
    }

    return(
      <div>
        <form onSubmit = {handleSubmit} className="searchBox">
            Enter a City: (Ex: Phoenix, AZ) <br/>
            <input 
                id='searchBox'
                type="text" 
                value={city}
                onChange={handleChange}
            /> <br/>
            <button id='getWeather'>Get Weather</button>
        </form>
        <div className="searchResults">
            <h3 className= 'resultCityName'>Weather For {city}</h3>
            {condition} <br/>
            {temp} <br/>
            Full weather report at <a href="https://www.accuweather.com/">Accuweather.com</a>
        </div>
      </div>
    )
}