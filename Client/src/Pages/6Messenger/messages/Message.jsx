import React, { useEffect, useState } from 'react';
import "./message.css"
import { format } from "timeago.js"
import axios from "axios";

function Message({ message, own, user }) {

 const [receiver, setReceiver] = useState()
 console.log(message.sender)
 console.log(receiver)
    useEffect( ()=>{
         const getReceiver = async () => {
            try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/user/` + message.sender)
                setReceiver(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        if (message.sender !== user._id) {
      getReceiver();
    }
            },[message.sender!=user._id])
          
            
    

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className='messageImg' src={own?`${process.env.REACT_APP_BACKEND_LINK}/images/${user?.profilePicture}`:`${process.env.REACT_APP_BACKEND_LINK}/images/${receiver?.profilePicture}`} alt="you" />
                <p className='messageText'>{message.text}</p>
            </div>
                <span  className="messageBottom"  > {format(message.createdAt)} </span>
        </div>
    );
}

export default Message;