import React from 'react';

import { TiTick } from "react-icons/ti";
import recoData from '../Recommend/RecoData';

const ProductDetailsLower = () => {
    return (
        <div className='ProductDetailsLower'>
            <div className="ProductDetailsLowerflex">
                
                <div className="pdLower1">
                    <nav style={{marginBottom:".8rem",}}>
                        <ul>
                            <li>Description</li>
                            <li style={{padding:'0 1rem'}}>Reviews</li>
                            <li>Shipping</li>
                            <li style={{padding:'0 1rem'}}>About seller</li>
                        </ul>
                    </nav>

                    <div className="">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>

                    <div className="pdDetailsTable">
                        <table>

                            <tr>
                                <td>Model</td>
                                <td>#8786867</td>

                            </tr>

                            <tr>
                                <td>Style</td>
                                <td>Classic Style</td>
                            </tr>

                            <tr>
                                <td>Certificate</td>
                                <td>#ISO-898921212</td>

                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>34mm x 450mm x 19mm</td>

                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>36B RAM</td>
                            </tr>
                        </table>
                    </div>

                    <div className="" style={{ marginTop: ".8rem" }}>
                        <div className="titletick">
                            <TiTick style={{ color: "gray", fontSize: "1.5rem" }} />
                            <i style={{ color: "gray" }}>Some great feature name here</i>
                        </div>
                        <div className="titletick">
                            <TiTick style={{ color: "gray", fontSize: "1.5rem" }} />
                            <i style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur </i>
                        </div>

                        <div className="titletick">
                            <TiTick style={{ color: "gray", fontSize: "1.5rem" }} />
                            <i style={{ color: "gray" }}>Duis aute irure dolor in reprehenderit</i>
                        </div>

                        <div className="titletick">
                            <TiTick style={{ color: "gray", fontSize: "1.5rem" }} />
                            <i style={{ color: "gray" }}>Some great feature name here</i>
                        </div>
                    </div>

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