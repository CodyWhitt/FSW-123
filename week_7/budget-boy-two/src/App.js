import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewUserGate from './Components/NewUserGate' 
import Header from './Components/Header';


function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('/UserData')
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, []);

  const editUser = (id, newObject) => {
    axios.put(`/userData/${id}`, newObject)
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Header/>
      <NewUserGate user={user} editUser={editUser}/>
    </div>
  );
}

export default App;
