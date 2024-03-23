import React, { useState } from 'react';
import offerData from '../OffersAndDeals/Offer'
import homeData from './HomeData'
import './HomeAndOutdoor.css'
import { useNavigate } from 'react-router-dom';
const HomeAndOutdoor = () => {
    const [data,setData]=useState(homeData)
    const getData = (e) =>{
        const res=e
  
    }

    const navigate = useNavigate();
    
    return (
        <div className='flexSizeHome'>

            <div className='HomeFlexsize'>

                <div className="HomeFlexsize1">
                   <div className="HomeFlexsize1text">
                    <h4>Home and</h4>
                    <h5>outdoor</h5>
                    <button>Source now</button>
                   </div>
                </div>

                <div className="HomeFlexsize2">
                    <div className="HomegridCard">
                        {
                            data.map((each, index) =>
                                <>
                                    <div className="Homecard" style={{cursor:"pointer"}} onClick={()=>navigate(`productDetails/${each.id}`)}>
                                        <div className="">
                                            <p>{each.name}</p>
                                            <p style={{ "color": "gray" }}>From</p>
                                            <p style={{ "color": "gray" }}>USD {each.price}</p>
                                        </div>
                                        <img src={each.img} alt="" />
                                    </div>
                                </>

                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeAndOutdoor;