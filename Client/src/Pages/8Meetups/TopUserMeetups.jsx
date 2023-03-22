import React from 'react'
import { NavLink } from 'react-router-dom'
// import "./closeFriend.css"


export default function TopUserMeetups({ user }) {
  return (
    <li className="friendParent" style={{marginTop:'20px' , fontWeight:'bold'}}>
        <img className='sidebarFriendImg' src={`${process.env.REACT_APP_BACKEND_LINK}/images/${user.profilePicture}`} alt="" />
        <span className='sidebarFriendName'>{" "+user.firstName+" "+user.lastName}</span> 
    </li>
  )
}
