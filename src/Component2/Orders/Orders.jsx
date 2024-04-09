import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';

const Orders = () => {
    const [MYorder, setMyorder] = useState([]);
    useEffect(() => {
        const orderItems = JSON.parse(localStorage.getItem('orders')) || [];
        setMyorder(orderItems);
    }, []);
    

    console.log(MYorder);
    return (

           <div className="">
            <Navbar/>
             <div className="cartflex1">
                <div className="cartHeadborder">

                 
                     
                                <div className="flex-space-betwen border_bottom" style={{ padding: ".9rem" }}>

                                    <div className="cardHeadFlex">

                                        <div className="cardHeadFlexImg">
                                            {/* <img src={} alt="" /> */}
                                        </div>

                                        <div className="cardHeadFlexText" style={{ margin: "0 .9rem" }}>
                                            <h4>{}</h4>
                                            <p>Size: medium, Color: blue,  Material: Plastic</p>
                                            <p>Seller: Best factory LLC</p>
                                            <div className="">
                                                <button  className='bs' style={{ padding: ".5rem", border: "none", color: "red", fontWeight: "bold" }}>Remove</button>
                                                <button className='bs' style={{ margin: ".5rem 1rem", padding: ".5rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>Save for later</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <h5 style={{ margin: ".5rem 1rem", padding: ".5rem" }}>${}</h5>
                                        <div className="cardHeadFlexbtn">
                                            <button  className='bs' style={{ margin: "0 .5rem", padding: ".6rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>-</button>
                                            {/* <button className='bs' style={{ margin: ".5rem .5rem", padding: ".5rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>{.length}</button> */}
                                            <button className='bs' style={{ margin: "", padding: ".6rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>+</button>

                                        </div>
                                    </div>

                                </div>
                 
                 

                </div>
            </div>
           </div>
       
    );
};

export default Orders;