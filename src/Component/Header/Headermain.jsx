import React, { useEffect, useState } from 'react';
import './Header.css'
import headerImg from '../../Photos/Mask group.jpg'
import avatar from '../../Photos/Avatar.png'
const Headermain = () => {


    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("register");
        if (storedUser) {
            const { username } = JSON.parse(storedUser);
            setLoggedInUser(username);
        }
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('register');
        setIsLoggedIn(false);
    };


    return (
        <div >
            <header className='header'>

                <div className="sidebar">

                    <li><a href="/searchAllcheta">Automobiles</a></li>
                    <li><a href="/searchAllcheta">Cloths and wear</a></li>
                    <li><a href="/searchAllcheta">Home interiors</a></li>
                    <li><a href="/searchAllcheta">Computer and tech</a></li>
                    <li><a href="/searchAllcheta">Tools,equipment</a></li>
                    <li><a href="/searchAllcheta">Sports and outdoors</a></li>
                    <li><a href="/searchAllcheta">Animal and pets</a></li>
                    <li><a href="/searchAllcheta">Machinery tools</a></li>
                    <li><a href="/searchAllcheta">More catgory</a></li>


                </div>

                <div className="banner">
                    <img src={headerImg} alt="" />
                </div>


                <div className="headerCard">

                    <div className="firstCard">

                        <div className="avatar">
                            <img className='avatarImg' src={avatar} alt="" />
                            <div className="">
                                {
                                    loggedInUser ? <h5 style={{ fontSize: ".8rem" }}>Hi, {loggedInUser ? loggedInUser : "User"}</h5> :
                                        <h5>Hi, User</h5>
                                }
                                <h5>Lets get started</h5>
                            </div>
                        </div>

                        <div className="avatarbtn">
                            <a className='btn1' >Join now</a>
                            {
                                loggedInUser ?
                                    <a onClick={()=>handleLogout()}href='/login' className='btn2'>Logout</a>
                                    :
                                    <a href='/login' className='btn2'>Login</a>
                            }


                        </div>
                    </div>

                    <div className="SecondCard">
                        <p>Send quotes with</p>
                        <p>supplier</p>
                        <p>preference</p>
                    </div>
                    <div className="thirdCard">
                        <p>Send quotes with</p>
                        <p>supplier</p>
                        <p>preference</p>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Headermain;