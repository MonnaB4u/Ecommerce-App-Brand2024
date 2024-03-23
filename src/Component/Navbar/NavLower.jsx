import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
import flag from '../../Photos/DE@2x.png'
const NavLower = () => {
    return (
        <div className=' '>
            
             <nav>
                <ul className='navlowerListextra'>
                    <li className="nav2listextra"><a href="">All category</a></li>
                    <li className="nav2listextra"><a href="">Gift boxes</a></li>
                    <li className="nav2listextra"><a href="">Gadets</a></li>
                    <li className="nav2listextra"><a href="">cloths</a></li>
                    <li className="nav2listextra"><a href="">Menu items</a></li>
                </ul>
            </nav>

            <nav className='NavHead neavlowerhead'>

                <ul className='flex-center navLowerlist'>
                    <li className="nav2list"> <FontAwesomeIcon icon={faBars} className="fa-1x fas" /> All category</li>
                    <li className="nav2list">Hot offer</li>
                    <li className="nav2list">Gift boxes</li>
                    <li className="nav2list">Projecs</li>
                    <li className="nav2list">Menu items</li>
                    <li className="nav2list">
                        <select className='nav2Dropdownprimary' name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select> </li>
                </ul>



                <ul className='flex-center'>
                    <li className="nav2list nav2list2">
                        <select className='nav2Dropdown' name="cars" id="cars">
                            <option value="volvo">English,USD</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </li>

                    {/* <li className="nav2list nav2list2">
                        <select className='nav2Dropdown' name="cars" id="cars">
                            <option value="volvo">Ship to <img src={flag} className="flagb" alt="" /> </option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select> 
                        </li> */}
                </ul>

            </nav>



        </div>
    );
};

export default NavLower;