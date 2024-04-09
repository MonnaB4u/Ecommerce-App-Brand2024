import React from 'react';
import { TiTick } from "react-icons/ti";

const Description = () => {
    return (
        <div>
               <div className="description">
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
        </div>
    );
};

export default Description;