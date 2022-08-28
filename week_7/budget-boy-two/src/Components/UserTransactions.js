//prereq
const express = require('express');
const userTransactionsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let transactions = [

]

// routes
userTransactionsRouter
  // get-http://localhost:9000/UserTransactions/
  .get('/', (req, res) => {
    res.send(transactions)
  }) // read all
   
  .post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    transactions.push(newItem);
    res.send(`post successful.`);
  }) // create item

  // delete-http://localhost:9000/UserTransactions/:_id
  .delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = transactions.findIndex(item => item._id === itemId); //finds index of wanted item
    transactions.splice(itemIndex, 1); // removes'splices' selected index item
    res.send('Resource successfully delete!');
  }) //delete item

  .put('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = transactions.findIndex(item => item._id === itemId); //finds index of wanted item
    Object.assign(transactions[itemIndex], req.body); //updates via body to item of index through .json format
    res.send(`Resource successfully updated`);
  }) //update item

;

module.exports = userTransactionsRouter