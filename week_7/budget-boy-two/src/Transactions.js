import './App.css';
import Header from './Components/Header';
import TransactionsList from './Components/TransactionsList'
import { useState , useEffect} from 'react';
import axios from 'axios'

function Transactions() {

    let [transactions, setTransactions] = useState([]);
    let [flag, setFlag] = useState([true])


    useEffect(() => {
      axios.get('/UserTransactions')
        .then(res => setTransactions(res.data))
        .catch(err => console.log(err))
    }, [flag]);

    const deleteItem = (id) => {
      axios.delete(`/UserTransactions/${id}`)
        .catch(err => console.log(err))
        setFlag(!flag)
    }

    const editItem = (id, object) => {
        axios.put(`/UserTransactions/${id}`, object)
        .catch(err => console.log(err))
        setFlag(!flag)
    }

    return (
        <div>
            <Header/>
            <TransactionsList transactions={transactions} deleteItem={deleteItem} editItem={editItem}/>
        </div>
    )
}

export default Transactions