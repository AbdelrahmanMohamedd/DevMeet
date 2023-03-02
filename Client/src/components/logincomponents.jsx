import classes from "../styles/login.module.css"
import React, { useRef } from 'react';
import Headercomponents from './headercomponents';
import Footercomponents from './footercomponents';
import Maincomponents from './maincomponents';

function Logincomponents(props) {
let email = useRef()
let password = useRef()

const LoginServer = async ()=>{
console.log("hi")
email=email.current.value
password=password.current.value
try{
 const res = await fetch('/login', { 
        method: 'POST', 
        body: JSON.stringify({ email, password }),
        headers: {'Content-Type': 'application/json'}
      });
      const data = await res.json();
      console.log(data);
      if (data.user) {
       
      }

    }
    catch (err) {
      console.log(err);
    }

}
    return (
        
         
            <>
          
               <div className={classes.parent}>
               <div className={classes.bodysize}>
        <Maincomponents></Maincomponents></div>
        <div className={classes.bodysize}>
        <div className={classes.style}>

       
                
                    
            <img src="images/logo.jpeg" alt="logo" width="200" height="200" />
            <br />
            <h2 className={classes.myfont}>sign in</h2>
            <br />
            <input className={classes.input} type="text" placeholder="email" ref={email} />
            <br />
            <input className={classes.input}type="text" placeholder="password" ref={password} />
            <br />
            <button className={classes.btn} onClick={LoginServer}>sign in</button>
            <div><img src="" alt="" />
            <a href=""></a></div>
            <div className={classes.sign }><img src="images/googleimg.png" alt="google" width="30" height="30"/>
            <a href="">continue with google</a></div>
            <div className={classes.sign}><img src="images/facebookimg.png" alt="facebook"width="30" height="30" />
            <a href="">containue wth facebook</a> </div>
            <button className={classes.btn}>regesiter</button></div>
       
            </div>
        </div>
        
        </>
       
        
    );
}

export default Logincomponents;