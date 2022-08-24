import {useState} from "react"
import Instructions from "./Instructions"
import NewUserForm from "./NewUserForm"

export default function Homepage () {

  const [flag, setFlag] = useState("startup")
  console.log(flag)
  
  if (flag === "startup") {
    return(
    <div id="appBox">
      <div id="title">Budget Boy</div>
      <div id="subTitle">Your personal budget app!</div>  
      <Instructions setFlag={setFlag}/>
    </div>)
  } else if (flag === "newUserForm"){
    return(
    <div id="appBox">
      <div id="title">Budget Boy</div>
      <div id="subTitle">Your personal budget app!</div>  
      <NewUserForm setFlag={setFlag}/>
    </div>)
  }
}
