import React from 'react';
import '../OffersAndDeals/OffersAndDeals.css'
import recoData from '../Recommend/RecoData';

const RelatedProduct = () => {
    return (
        <div className='flexSize'>
            <div className="flexSize2">
            <h3 style={{fontSize:"1.3rem",margin:".5rem 0rem"}}>Related Product</h3>
                <div className="gridCard">
                    {
                        recoData.slice(2,7).map((each, index) =>
                            <>
                                <div className="card">
                                    <img src={each.img} alt="" />
                                    <p>{each.name}</p>
                                    <small>${each.price}</small>
                                </div>
                            </>

                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default RelatedProduct;