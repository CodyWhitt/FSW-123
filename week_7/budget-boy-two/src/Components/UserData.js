//prereq
const express = require('express');
const userDataRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let userInfo = {
  _id: uuidv4(),
  userName: '',
  saving: '',
  income: '',
  theme: false
};

// routes
userDataRouter
  // get-http://localhost:9000/userdata/
  .get('/', (req, res) => {
    res.send(userInfo)
  }) // read all

  .put('/:itemId', (req, res) => {
    Object.assign(userInfo, req.body); //updates via body to item of index through .json format
    res.send(`Resource successfully updated`);
  }) //update item
 
;

module.exports = userDataRouter