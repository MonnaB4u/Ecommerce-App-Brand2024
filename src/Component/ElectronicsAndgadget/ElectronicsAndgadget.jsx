import React from 'react';
import homeData from '../HomeAndOutdoor/HomeData';
import './ElectronicsAndgadget.css'
import { useNavigate } from 'react-router-dom';
import electric from './Electriv';

const ElectronicsAndgadget = () => {

    const naviate=useNavigate()
    return (
        <div className='flexSizeHome'>

        <div className='HomeFlexsize'>

            <div id="HomeFlexsize1">
               <div className="HomeFlexsize1text">
                <h4>Consumer</h4>
                <h5>electronics and</h5>
                <h5>Gagets</h5>
                <button>Source now</button>
               </div>
            </div>

            <div className="HomeFlexsize2">
                <div className="HomegridCard">
                    {
                        electric.map((each, index) =>
                            <>
                                <div className="Homecard" style={{cursor:"pointer"}} onClick={()=> naviate(`productDetails/${each.id}`)} >
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

export default ElectronicsAndgadget;