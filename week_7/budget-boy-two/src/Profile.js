import Header from "./Components/Header";
import { useState , useEffect} from 'react';
import axios from 'axios'


// set profile page all on one component for simplicity
function Profile() {
  
  //use states required
  let [user, setUser] = useState([]) 
  let [editing, setEditing] = useState(false) 
  let [flag, setFlag] = useState(true)

  //initial get request
  useEffect(() => {
    axios.get('/UserData')
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, [flag]);

  //axios put call and refresh
  const editItem = (id, object) => {
    axios.put(`/UserData/${id}`, object)
    .catch(err => console.log(err))
    setFlag(!flag)
  }

  //handle click function for submit
  function handleClick(){
    let newUser = {
        userName: document.getElementById('userName').value,
        income: document.getElementById('income').value,
        saving: document.getElementById('saving').value
    }

    editItem(user._id, newUser)

  }

  // switches between edit and display
  if (editing == false) {
    return (
      <div> 
        <Header/>
        <div className='homeBox'>
          <div>UserName: {user.userName}</div>
          <div>Income: {user.income}</div>
          <div>Amount to save: {user.saving}</div>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      </div>
    )
  } else {
    return (
      <div> 
        <Header/>
        <div className='homeBox'>
          UserName: <input placeholder={user.userName} id='userName'></input> <br/>
          Income: <input placeholder={user.income} id='income'></input> <br/>
          Amount to save: <input placeholder={user.saving} id='saving'></input> <br/>
          <button onClick={() => setEditing(false)}>Cancel</button>
          <button onClick={() => {handleClick(); setEditing(false)}}>Accept</button>
        </div>
      </div>
    )
  }
}

export default Profile