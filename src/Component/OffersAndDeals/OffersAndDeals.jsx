import React from 'react';
import './OffersAndDeals.css'
import Timer from './Timer';

import offerData from './Offer'
import { useNavigate } from 'react-router-dom';

const OffersAndDeals = () => {

    const navigate = useNavigate()

    return (
        <div className='flexSize'>

            <div className="flexSize1">
                <Timer />

            </div>

            <div className="flexSize2">
                <div className="gridCard">
                    {
                        offerData.map((each, index) =>
                            <>
                                <div onClick={()=>navigate(`productDetails/${each.id}`)} className="card">
                                    <img src={each.img} alt="" />
                                    <p>{each.name}</p>
                                    <small>-{each.discount}</small>
                                </div>
                            </>

                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default OffersAndDeals;