import './App.css';
import {useState} from "react";

function App() {
  
  const [cars, setCars] = useState([""]);
  const [favCar, setFaveCar] = useState([""]);

  const handleChange = (event) => {
    setFaveCar(event.target.value)
  }

  const addCar = () => {
    const newCars = [...cars];
    newCars.push(favCar); 
    setCars(newCars);
    setFaveCar('');
  }

  const carList = cars.map((car, index) => <div key ={index}>{car}</div>);

  console.log(favCar);
  
  return (
    <>
      <label> Car: <input type="text" value={favCar} onChange={handleChange} /></label>
      <button onClick ={addCar}>Add Car</button>
      <h5>My list of fav cars is:</h5>
      <h5>{carList}</h5>
    </>
  )
}

export default App;
