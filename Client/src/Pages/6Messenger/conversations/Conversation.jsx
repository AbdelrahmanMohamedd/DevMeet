import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./conversation.css"







const Conversation = ({ conversation, currentUser }) => {
    var counter = 0;
    const [user, setUser] = useState(null)
    useEffect(() => {
        const friendId = conversation.members.find(m => m !== currentUser._id);
        const getUser = async () => {
            await axios(`${process.env.REACT_APP_BACKEND_LINK}/user/` + friendId).then(res => {
                setUser(res.data)
                counter++;
            }).catch(
                err => {
                    console.log("err")

                })
        }
        getUser();
    }, [currentUser, conversation])
    return (
        //need to add profile picture
        <div className='conversation'>
            { 
                user && <img className='conversationImg' src={`${process.env.REACT_APP_BACKEND_LINK}/images/${user?.profilePicture}`} alt="" />
            }
            {
                user && <span className="conversationName">{user?.firstName+" "+user?.lastName}</span>
            }
        </div>
    );
};

export default Conversation;