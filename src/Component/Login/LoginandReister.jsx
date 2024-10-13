import React, { useContext, useState } from 'react';
import './LoginandReister.css'

import logCart from "../../Photos/Group.png"

import { FaUser, FaUserLock } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';



const LoginandReister = () => {
    const [loggedInuser, setLoggedInUser] = useContext(UserContext);

    const [style, setStyle] = useState("login")
    const navigate = useNavigate()
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleRegister = () => {
        localStorage.setItem("register", JSON.stringify({ userEmail, username, password }));
        setIsLoggedIn(true);
        alert('Registration successful! You can login one.');
    };

    const handleLogin = () => {
        const storedUser = localStorage.getItem("register");
        // console.log('Stored User:', storedUser);

        if (storedUser) {
            const { username: storedUsername, password: storedPassword, userEmail:storedEmail } = JSON.parse(storedUser);
            let user = {
                name: storedUsername,
                email: storedEmail
            }
            setLoggedInUser(user)

            // console.log('Stored Username:', storedUsername);
            // console.log('Stored Password:', storedPassword);

            // console.log('Entered Username:', username);
            // console.log('Entered Password:', password);

            if (username === storedUsername && password === storedPassword) {
                setIsLoggedIn(true);
                alert('Login successful!');
                navigate('/')
            } else {
                alert('Invalid username or password');
            }
        } else {
            alert('User not found');
        }
    };

    // const handleLogout = () => {
    //     localStorage.removeItem('register');
    //     setIsLoggedIn(false);
    // };


    return (
        <div className="bg">
            <div className='loginHeader '>
                <div className="">

                    {
                        style === "login" &&
                        <div className="loginform" >

                            <div className="loginformIMG">

                                <img src={logCart} alt="" />

                            </div>

                            <form action="" className='logForm'>

                                <div className='inputbx'>
                                    <i><MdAlternateEmail /></i>
                                    <input type="email" name='email' placeholder='Enter your email' />
                                </div>
                                <p>OR</p>

                                <div className='inputbx'>
                                    {/* <i><FaUserLock /></i> */}
                                    <i><FaUser /></i>
                                    <input type="name" name='name' placeholder='Enter your name' value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>

                                <div className='inputbx'>
                                    {/* <i><FaUserLock /></i> */}
                                    <i><MdOutlinePassword /></i>
                                    <input type="password" name='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button onClick={handleLogin} className='loginbtn'>Login</button>
                                
                                <div className="logincheck">
                                    {/* <label htmlFor="">  <input onClick={() => setStyle("reistration")} type="checkbox" />Make account</label> */}
                                    <a onClick={() => setStyle("reistration")} style={{ cursor: "pointer" }}>Don't have account? Click me</a>
                                </div>

                            </form>
                        </div>
                    }

                    {
                        style === "reistration" &&
                        <div className="loginform" id='registerForm'  >

                            <img src={logCart} alt="" />

                            <form action="" className='logForm'>

                                <div className='inputbx'>
                                    <i><MdAlternateEmail /></i>

                                    <input type="email" name="email" placeholder='Enter your email' value={userEmail} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className='inputbx'>
                                    <i><FaUser /></i>
                                    {/* <i><FaUserLock /></i> */}
                                    <input type="name" name='name' placeholder='Enter your name' value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>

                                <div className='inputbx'>
                                    <i><MdOutlinePassword /></i>
                                    <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <button onClick={handleRegister} className='loginbtn'>Submit</button>

                                <div className="logincheck">
                                    {/* <label htmlFor="">  <input onClick={() => setStyle("login")} type="checkbox" />Go to LOGIn</label> */}
                                    <p onClick={() => setStyle("login")} style={{ cursor: "pointer" }}>Already have account? Login <i><IoIosLogIn /></i></p>
                                </div>

                            </form>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default LoginandReister;