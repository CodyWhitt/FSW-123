import {useState, useEffect} from "react"
import Instructions from "./Instructions"
import NewUserForm from "./NewUserForm"

export default function NewUserIntro({user, editUser}) {

  const [pages, setPages] = useState("1")

  if (pages === "1") {
    return(
    <div id="appBox">
      <Instructions/>
      <button className="button" onClick={() => setPages('2')}>I'm Ready to Save!</button>
    </div>)
  } else if (pages === "2"){
    return(
    <div id="appBox"> 
      <NewUserForm user={user} editUser={editUser}/>
      <button className="button" onClick={() => setPages('1')}>Back to Instructions</button>
    </div>)
  }
}