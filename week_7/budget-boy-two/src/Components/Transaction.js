import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function Transaction({transactions, deleteItem, editItem}) {

    let [editing, setEditing] = useState(false)

    function handleEvent() {
        let newObject = {
            date: document.getElementById('transactionDate').value,
            dollars:document.getElementById('transactionDollars').value,
            location:document.getElementById('transactionLocation').value,
            description:document.getElementById('transactionDescription').value
        }

        editItem(transactions._id, newObject)

        setEditing(false)
    }



    if (editing == false) {
      return (
        <div id='singleTransaction'>
          <div>{transactions.date}</div>
          <div>${transactions.dollars}</div>
          <div>{transactions.location}</div>
          <div>{transactions.description}</div>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteItem(transactions._id)}>Delete</button>
        </div>
      )
    } else {
      return (
        <div id='singleTransaction'>
          <input type='date' placeholder={transactions.date} id='transactionDate'></input> <br/>
          $<input type='number' placeholder={transactions.dollars} id='transactionDollars'></input> <br/>
          <input placeholder={transactions.location} id='transactionLocation'></input> <br/>
          <input placeholder={transactions.description} id='transactionDescription'></input> <br/>
          <button onClick={() => handleEvent()}>Accept</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      )
    }
}