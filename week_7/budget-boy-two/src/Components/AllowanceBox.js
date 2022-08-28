import axios from 'axios';
import { UserContext } from "../HomePage"
import React from 'react';


export default function AllowanceBox() {
    
    const user = React.useContext(UserContext)

    function allowanceCalc(user) {
        let net = (user.income - user.saving)
        let dailyTotal = (Math. round(100*(net / 7))/100)
        return(dailyTotal)
    }

    return (
    <div>
        <h3>You have a daily allowance of</h3>
        <h1>{`${allowanceCalc(user)}`}</h1>
    </div>
    )
}