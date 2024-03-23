import React from 'react';
import Flag from './SupplyData';
import './Supply.css'

const SupplySection = () => {

    return (
        <div className='supplyHead'>

            <h2 style={{"margin":".5rem", "fontSize":"1.5rem"}}>Suppliers by region</h2>

            <div className="supplyGrid">
                {
                    Flag.map((each, i) =>

                        <>
                            <div className="supplyCard">
                                <div className="">
                                    <img src={each.img} alt="" />
                                </div>
                                <div className="">
                                    <p>{each.name}</p>
                                    <small>{each.title}</small>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default SupplySection;