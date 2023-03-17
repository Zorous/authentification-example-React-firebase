import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react'
import {auth} from "../firebase"

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);


    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        });
        return listen();
    },[])

    const UserSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log('signed out on successfully')
        }).catch(error => console.log(error))
    }

  return (
    <div>
{authUser?<div>
    Signed in as {authUser.email}!! 🥳
    <button onClick={UserSignOut}>Sign out</button>
    
    </div>:<div>Not signed in 😅</div>}    
    </div>
  )
}

export default AuthDetails
