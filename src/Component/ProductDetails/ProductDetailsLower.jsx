import React, { useState } from 'react';
import recoData from '../Recommend/RecoData';
import Description from './LowerPDdetailsSec/Description';
import Reviews from './LowerPDdetailsSec/Reviews';

const ProductDetailsLower = ({foundData}) => {

    const [commit,setCommit]=useState('Description')

    return (
        <div className='ProductDetailsLower'>
            <div className="ProductDetailsLowerflex">
                
                <div className="pdLower1">
                    <nav style={{marginBottom:".8rem",}}>
                        <ul>
                            <li onClick={()=> setCommit("Description")}>Description</li>
                            <li onClick={()=> setCommit("Reviews")} style={{padding:'0 1rem'}}>Reviews</li>
                            <li onClick={()=> setCommit("Shipping")}>Shipping</li>
                            <li onClick={()=> setCommit("seller")} style={{padding:'0 1rem'}}>About seller</li>
                        </ul>
                    </nav>

           
                    {commit==="Description" && <Description />}
                    {commit==="Reviews" && <Reviews foundData={foundData}/>}
                
                 </div>

                <div className="pdLower2">
                    <div className="" style={{ padding: ".7rem" }} >
                        <h4>You may like</h4>
                        {
                            recoData.slice(2, 9).map((each, i) =>
                                <div className="" style={{ display: "flex", alignItems: "center", padding: ".3rem" }}>
                                    <img style={{ width: "3rem" }} src={each.img} alt="" />
                                    <div className="" style={{ margin: ".2rem" }}>
                                        <p  >{each.name}</p>
                                        <small>$ {each.price}</small>
                                    </div>

                                </div>

                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsLower;