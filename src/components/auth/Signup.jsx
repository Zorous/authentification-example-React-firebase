import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase";


const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleSignUp= (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword (auth, email, password)
            .then((userCredential) =>{
                console.log(userCredential)
             })
             .catch((error) =>{
                console.log(error);
             })

    }


  return (
    <div className="sign-up-container">
      <form onSubmit={handleSignUp}>
      <h1>Register</h1>
      <input type={"email"} placeholder="Enter your email.." value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
      <input type={"password"} placeholder="Enter your password.." value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
      <br/>
      <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Signup
