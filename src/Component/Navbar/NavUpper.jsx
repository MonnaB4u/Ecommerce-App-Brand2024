import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { faBars, faCartArrowDown, faCartShopping, faCommentDots, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../Photos/logo-colored.png'
import { useNavigate } from 'react-router-dom';

const NavUpper = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);


    const [loggedInUser, setLoggedInUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem("register");
        if (storedUser) {
            const { username } = JSON.parse(storedUser);
            setLoggedInUser(username);
        }
    }, []);


    const navigate = useNavigate()
    return (
        <nav>
            <div className="NavHead">

                <ul className='flex-center' >

                    <div className="flex-center ">
                        <i id="menu-icon" > <FontAwesomeIcon icon={faBars} className="fa-2x fas" /></i>
                        <a href="/">
                            <img className="navlogo" src={img} alt="" />
                        </a>
                    </div>

                    <ul className='flex-space-betwen nav1icon2' id="menuIconflex">
                        <li className='navIcon'><FontAwesomeIcon icon={faUser} className="fa-2x fas" /> <h6>{loggedInUser ? loggedInUser : "User"}</h6> </li>
                        <li className='navIcon'><FontAwesomeIcon icon={faCommentDots} className="fa-2x fas" /><h6>Message</h6> </li>
                        <li onClick={() => navigate("/myCart")} className='navIcon'>{cartItems.length === 0 ? (<i className='myCart' style={{ color: "white" }}>0</i>) : <i className='myCart' style={{ color: "white" }}>{cartItems.length} </i>}  <FontAwesomeIcon icon={faCartShopping} className="fa-2x fas" />  <h6>My Cart</h6></li>
                    </ul>

                </ul>



                <ul className='flex-space-around'>
                    <input className='NavInput' type="text" placeholder='Search' />
                    <input className='NavInput2' type="text" placeholder='Search' />
                    {/* <select className='inputDropDown' name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select> */}
                    <button className='inputButton'>Search</button>
                </ul>

                <ul className='nav1icon'>
                    <li className='navIcon'><FontAwesomeIcon icon={faUser} className="fa-1x fas" /> <h6>{loggedInUser ? loggedInUser : "User"}</h6> </li>
                    <li className='navIcon'><FontAwesomeIcon icon={faCommentDots} className="fa-1x fas" /><h6>Message</h6> </li>
                    <li  className='navIcon'><FontAwesomeIcon icon={faHeart} className="fa-1x fas" /><h6>Orders</h6></li>
                    <li onClick={() => navigate("/myCart")} className='navIcon'>{cartItems.length === 0 ? (<i className='myCart' style={{ color: "white" }}>0</i>) : <i className='myCart' style={{ color: "white" }}>{cartItems.length} </i>}  <FontAwesomeIcon icon={faCartShopping} className="fa-1x fas" />  <h6>My Cart</h6></li>
                </ul>


            </div>
        </nav>
    );
};

export default NavUpper;