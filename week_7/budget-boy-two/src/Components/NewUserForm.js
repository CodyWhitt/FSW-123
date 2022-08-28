import React from "react";
import {useNavigate, Route, Routes} from "react-router-dom";
import { useState } from "react";



export default function NewUserForm ({user, editUser}) {

    // const navigate = useNavigate()

    function handleSubmit() {
        let newInfo = {
            userName: document.getElementById("userName").value,
            saving: document.getElementById("saving").value,
            income: document.getElementById("income").value
        }

        editUser(user._id, newInfo)
    }


    return (
        <form onSubmit={handleSubmit} id="newUserForm">
            Whats your Name? <br/>
            <input id={"userName"} placeholder="John"></input> <br/>
            First we will need your paycheck amount for 1 week. <br/>
            <input id="income" placeholder="13.24" type="number"></input> <br/>
            How much would you like to save per week?  <br/>
            <input id="saving" placeholder="20" type="number"></input> <br/>
            <button>Submit</button>
        </form>
    )
}