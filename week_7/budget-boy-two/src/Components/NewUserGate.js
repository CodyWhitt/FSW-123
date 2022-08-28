import NewUserIntro from "./NewUserIntro"
import {useNavigate, Route, Routes} from "react-router-dom";


export default function NewUserGate ({user, editUser}) {

  const navigate = useNavigate()

  if (user.userName==='') {
    return (
      <NewUserIntro user={user} editUser={editUser}/>
    )    
   } else {
    return (
      navigate('./HomePage')
    )
  }
}
