
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="searchBox">
        Enter a City: (Ex: Phoenix, AZ) <br/>
        <input id='searchBox'type="text" placeholder="Phoenix, AZ"></input> <br/>
        <button id='getWeather'>Get Weather</button>
      </div>
      <div className="searchResults">
        <h3 className= 'resultCityName'>Weather For "city"</h3>
        uknown data value
      </div>
    </div>
  );
}

export default App;
