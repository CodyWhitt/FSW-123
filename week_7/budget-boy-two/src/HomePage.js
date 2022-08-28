import './App.css';
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import {useNavigate, Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import HomeBox from './Components/HomeBox'
import React from 'react';


export const UserContext = React.createContext()

function HomePage() {
  
  const navigate = useNavigate()

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('/UserData')
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, []);

  const addItem = (object) => {
    axios.post(`/UserTransactions`, object)
      .catch(err => console.log(err))
  }

  if (user.userName==='') {
    return (
        navigate('/')
    )    
   } else {
    return (
        <div className="App">    
          <UserContext.Provider value={user}>
            <Header/>
            <HomeBox addItem={addItem}/>
          </UserContext.Provider>
        </div>

    )
  }
}


export default HomePage
