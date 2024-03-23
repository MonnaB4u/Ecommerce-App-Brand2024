import React from 'react';
import { FaDiceFour, FaHamburger } from 'react-icons/fa';

const SearchNav = () => {
    return (
        <div className='SearchNav'>
            <div className="SearchNavflex flex-space-betwen">

                <div className="flex-center">
                    <p>12,911 items in </p>
                    <h4>Mobile accesory</h4>
                </div>

                <div className="">
                    <input type="checkbox" value="c" checked="c" />
                    <label htmlFor="">Verified only</label>
                </div>

                <select className='SearchNavdrop' name="cars" id="cars">
                        <option value="volvo">Featured</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>

                <div className="">
                    <FaHamburger className='SearchNavicon' />
                    <FaDiceFour />
                </div>

            </div>
        </div>
    );
};

export default SearchNav;