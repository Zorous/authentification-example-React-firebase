import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {auth, provider} from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userData, setUserData] = useState(null);

    const handleSignIn= (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                navigate("/home");
             })
             .catch((error) =>{
                console.log(error);
             })
    }

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then((data)=>{
            setUserData(data.user.email)
            localStorage.setItem("email",data.user.email)
            navigate("/home")
        })
    }

    //Google Auth
    useEffect(()=>{
        setUserData(localStorage.getItem('email'))
    },[])

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSignIn}>
      <h1>Login</h1>
      <input type={"email"} placeholder="Enter your email.." value={email} onChange={(e)=>setEmail(e.target.value)} /> <br/>
      <input type={"password"} placeholder="Enter your password.." value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button type="submit">Sign in</button>
       <br /><br/>
      <button type="submit" onClick={handleGoogleSignIn}>Sign in with Google</button>
      <br/>
      <small>Or you can <Link to="/signup">Register</Link></small>
      </form>
    </div>
  );
};

export default Signin;
