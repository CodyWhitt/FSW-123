import './App.css';
import CarList from './CarList';
import {useState} from "react";
import {v4 as uuidv4} from "uuid"

function App() {

  //Initial state of cars array
  const [cars, setCars] = useState([
    {
      id: uuidv4(),
      brand:"Ford",
      model: "Mustang"
    },
    {
      id: uuidv4(),
      brand: "Honda",
      model: "Civic"
    },
    {
      id: uuidv4(),
      brand: "Subaru",
      model: "Impreza"
    }
  ]);

  //Car change state function
  const addCar = (model, brand) => {

    const newCars = [...cars,
      {
        id: uuidv4(),
        brand: brand,
        model: model
      }
    ]
    //changes state of cars
    setCars(newCars);
  }

  //What you see
  return (
    <div className = "app">
      <h3>My Cars</h3>
        <CarList cars = {cars} addCar = {addCar} />
    </div>
  )
}

export default App;