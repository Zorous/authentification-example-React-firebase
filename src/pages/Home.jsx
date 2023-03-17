import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        navigate("/signin")
        setAuthUser(null);
      }
    });
    return listen();
  }, []);



    const UserSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out on successfully");
        navigate("/signin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
    {authUser?
        <div>
    Signed in as {authUser.email}!! 🥳
    <button onClick={UserSignOut}>Sign out</button>
    
    </div>:<div>Please <a href="#" onClick={()=>navigate("/signin")}>sign in</a> first 😅</div>}    
    </div>
  )
}

export default Home
