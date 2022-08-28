import { UserContext } from "../HomePage"
import AllowanceBox from "./AllowanceBox"
import NewPurchase from "./NewPurchase"
import React from "react"


export default function HomeBox ({addItem}){

    const user = React.useContext(UserContext)

    return (
      <div className="homeBox">
        <h2>Welcome to the app {user.userName}!</h2>
        <AllowanceBox/>
        <NewPurchase addItem={addItem}/>
      </div>
    )
}
