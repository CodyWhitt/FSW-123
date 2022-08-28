// prereq
const express = require('express');
const app = express();
const PORT = 9000;

// route paths
const userDataRouter = require('./src/Components/UserData');
const userTransactionsRouter = require('./src/Components/UserTransactions');

// middleware
app.use(express.json());

// routes
app.use('/UserData', userDataRouter)
app.use('/UserTransactions', userTransactionsRouter)

// listener
app.listen(PORT, () => {
    console.log(`it's up and running on port: ${PORT}`)
}); 