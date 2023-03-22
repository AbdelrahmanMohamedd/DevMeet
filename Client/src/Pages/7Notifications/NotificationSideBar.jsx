import React, { useEffect, useState } from 'react'
import '../4Home/components/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@mui/icons-material'
import NotificationCloseFriend from './NotificationTopUsers'
import axios from 'axios'
import TagIcon from '@mui/icons-material/Tag';
import { useTranslation } from 'react-i18next';





export default function NotificationSideBar( ) {


    let [t,i18n]= useTranslation();
    const [topUsers, setTopUsers] = useState()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_LINK}/user/top/likes`)
            .then((response) => { return response })
            .then(({ data }) => {
                setTopUsers(data)
            })
            .catch((err) => { console.log(err) })
    }, [])





    return (
        <div className='sidebar'>
            <div className="sidebarWrapper"> 
                <ul className="sidebarFriendList"> 
                        <h3 className="sidebarListItemTextMAIN" >{t("Top Contributors")} <Group className='sidebarIcon'  /> </h3>
                    {topUsers?.map(u => (
                        <NotificationCloseFriend key={u._id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

