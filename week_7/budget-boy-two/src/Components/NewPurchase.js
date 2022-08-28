const { v4: uuidv4 } = require('uuid');


export default function NewPurchase({addItem}) {


    function handleSubmit() {

        let newTrans = {
            _id: uuidv4(),
            date: document.getElementById("date").value,
            dollars: document.getElementById("dollars").value,
            location: document.getElementById("location").value,
            description: document.getElementById("description").value,
        }

        addItem(newTrans)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            Enter New Transactions here: <br/>
            <input type='date' id='date'></input> <br/>
            $<input type="number" placeholder="00.00" id='dollars'></input> <br/>
            <input placeholder="Where from?" id='location'></input> <br/>
            <input placeholder="Description" id='description'></input> <br/>
            <button>Submit</button>
        </form>
    )

}