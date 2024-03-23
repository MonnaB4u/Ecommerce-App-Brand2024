import React from 'react';
import './ExtraService.css'
import { faBars, faCartArrowDown, faCartShopping, faCommentDots, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img1 from '../../Photos/img/Mask group (1).png'

const ExtraService = () => {
    return (
        <div className='seviceHeader'>
            <div className="servicerid ">

                <div className="serviceCard border">
                    <img src={img1} alt="" className=''/>
                    <FontAwesomeIcon icon={faUser} className='icon border' />
                    <p>Source from</p>
                    <p>Industry Hubs</p>
                </div>

                

            </div>


        </div>
    );
};

export default ExtraService;