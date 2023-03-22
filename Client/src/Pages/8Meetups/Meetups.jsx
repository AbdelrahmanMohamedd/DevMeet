import NavBar from '../../Components/NavBar';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"
import "./Meetups.css"
import { useTranslation } from 'react-i18next';
// import MeetupRoom from '../9MeetupRoom/MeetupRoom';
import MeetupsSideBar  from './MeetupsSideBar'


const Meetups = () => {
    let [t,i18n]= useTranslation();
    const [roomcode, setRoomCode] = useState("");
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(roomcode){
            // alert("your Room id is  "+roomcode)
        navigate(`/meetup/${roomcode}`)
        }
        else{
            alert ("Enter a valid Zoom Meeting ID")
        }
    }
    const setRoomCodeRandom = () => {
        setRoomCode(Date.now())

        // myalert()
    }
    // const myalert=()=>{

    // }
    return (
        <>
            <NavBar />
            <div className='container-fluid'>
                <div className="row mt-5 meetupsMainbox">
                    <div className="col-lg-4 col-6 TobuserBox">
                        <div className="row mt-5  TobuserBoxCont">
                            <MeetupsSideBar/>
                        </div>
                    </div>
                    
                    <div className=" col-lg-6 col-6 zoomBox">
                        <div className="row ">
                            <div className='parent_jRoom'>
                                {/* <div className='jRoom'> */}
                                    <div className='mycenterdiv'>
                                        <form onSubmit={handleFormSubmit} className='form mt-5'>
                                            {/* <div>Enter id or personal link name</div> */}
                                            {/* <input type="text" class="my_form-control" value={roomcode} onChange={e=>setRoomCode(e.target.value)}  placeholder='Enter id or personal link name' required /> */}
                                            {/* <input type='submit' className='joinbutton mb-2' value="Create Meeting" onClick={setRoomCodeRandom} /> */}
                                            <button type='submit' className='joinbutton mb-2' onClick={setRoomCodeRandom}>{t("Create Meeting")}</button>
                                            <h3>{t("Or")}</h3>
                                            <div>{t("Join Meeting")}</div>
                                            <input type="text" className="my_form-control mt-2" placeholder={t('Please Enter Meeting ID')} value={roomcode} onChange={e => setRoomCode(e.target.value)} />
                                            <br />
                                            <input type='submit' className='joinbutton2 mt-2' value={t("join")} />
                                        </form>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-2" >

                    </div>


                        
                    {/* <div className=" col-lg-4 col-12 mt-5">
                        <div className="row mt-5">
                            <h3>Events</h3>
                            <div className='d-flex'>
                                <div className=" mybackground col-2 text-sm-center">1  <br /> Dec</div>
                                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">event starts</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='d-flex'>
                                <div className=" mybackground col-2 text-sm-center">2  <br /> Dec</div>
                                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">event starts</div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className='d-flex'>
                                <div className=" mybackground col-2 text-sm-center">3  <br /> Dec</div>
                                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">event starts</div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className='d-flex'>
                                <div className=" mybackground col-2 text-sm-center">4  <br /> Dec</div>
                                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">event starts</div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className='d-flex'>
                                <div className=" mybackground col-2 text-sm-center">5  <br /> Dec</div>
                                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">event starts</div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className='d-flex'>
                                <div className=" mybackground col-2 text-sm-center">6  <br /> Dec</div>
                                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">event starts</div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </>
    );
};

export default Meetups;


