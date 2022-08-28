# Launching the Budget Boy app
    The application uses a local express server to run everything. The port is already set to 9000. You will have to run a second instance of VSC and navigate to the app folder and use node ./server.js
    In the original VSC you can run npm start to launch the react app

# Using the app 
    on editing anything you must re-enter all values otherwise you will edit the object to have blank values. 
    the application will initially verify if you are a "new User" and send you through a profile creation process. 
    after it will push you to the home page to show you a gross allowance... gross meaning no bills of transactions deducted. 
    on the transactions page you can only edit one item at a time... unique values are not set

# future improvements 
    I would like to make it to where the allowance is reflected on the value for the specified day, but I will not be able to properly do this unless values are stored in a persistent server. (future goal)
    A history tab in the transactions for specific days. 
    calender on the home page reflecting colors of how well you stayed under budget. 
    extend weekly income to monthly to be able to include bills into the formula to provide a net allowance
    