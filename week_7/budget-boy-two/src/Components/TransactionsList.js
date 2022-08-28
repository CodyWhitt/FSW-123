import Transaction from './Transaction'

export default function TransactionsList({transactions, deleteItem, editItem}) {

    const transactionList = transactions.map((transactions) => {  
        return <Transaction key = {transactions._id} transactions={transactions} deleteItem={deleteItem} editItem={editItem} />
      });
    return(
        <div className='homeBox'>
            {transactionList}
        </div>
    )
}