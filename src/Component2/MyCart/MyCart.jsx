import React, { useEffect, useState } from 'react';
import NavUpper from '../../Component/Navbar/NavUpper';
import './MyCart.css';
import Discount from './../../Component/ProductDetails/Discount';

import { FaCcVisa } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

import Recommend from './../../Component/Recommend/Recommend';
import Footer from './../../Component/Footer/Footer';
import RelatedProduct from '../../Component/ProductDetails/RelatedProduct';
import SecondFooter from '../../Component/Footer/SecondFooter';
import { useNavigate } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';


const MyCart = (props) => {
    //props from App
    const setOrder = props.setOrder
    const setOrderJason=props.setOrderJason

    const navigate = useNavigate()

    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const removeFromCart = (name) => {
        const updatedCartItems = cartItems.filter(item => item.name !== name);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const [cartData, setCartData] = useState([]);

    const handleAddCart = (e) => {
        let pd = [...cartData, e]
        setCartData(pd)

    }

 
    let total = cartData.reduce((accumulator, product) => accumulator + product.price, 0);

    let shipping = 0;
    if (total > 700) {
        shipping = 20;
    }
    else if (total >= 1000) {
        shipping = 10;
    } else if (total >= 300) {
        shipping = 30;
    } else if (total > 250) {
        shipping = 40;
    } else if (total > 100) {
        shipping = 50;
    }

    let grandTotal = Math.floor(total + shipping);

    let tax = 0;
    
    if (grandTotal > 700) {
        tax = 7;
    } else if (grandTotal >= 300) {
        tax = 7.5;
    } else if (grandTotal > 250) {
        tax = 8;
    }else if(grandTotal >100){
        tax= 9
    }

    let grandTotalWithTax = grandTotal * tax / 100 + grandTotal;


    const handleDeleteCart = (e) => {
        let deletePrd = [...cartData];
        deletePrd.splice(0, 1);
        setCartData(deletePrd);
    }

    const checkoutCart = () => {
        let pdOrder = [];
        pdOrder.push({ "total":total, "grandTotal":grandTotal, "grandTotalWithTax": grandTotalWithTax, "shipping":shipping, "tax":tax});

        setOrder(pdOrder);
        
       if(cartData.length > 0) {
        setTimeout(() => {
            navigate('/checkout');
            setOrderJason([...cartData])
        }, 1000);
       }else{
        alert("Please Order First")
       }
    }



    return (
        <div>
            <NavUpper />
            <div className="" style={{ display: "none" }}>
                <CheckOut cartData={cartData} />
            </div>
            <div className="CartHead">
                <h2>MyCart {cartItems.length}</h2>

                <div className="cartflex">

                    <div className="cartflex1">
                        <div className="cartHeadborder">

                            {
                                cartItems.map((each, i) =>
                                    <>
                                        <div className="flex-space-betwen border_bottom" style={{ padding: ".9rem" }}>

                                            <div className="cardHeadFlex">

                                                <div className="cardHeadFlexImg">
                                                    <img src={each.img} alt="" />
                                                </div>

                                                <div className="cardHeadFlexText" style={{ margin: "0 .9rem" }}>
                                                    <h4>{each.name}</h4>
                                                    <p>Size: medium, Color: blue,  Material: Plastic</p>
                                                    <p>Seller: Best factory LLC</p>
                                                    <div className="">
                                                        <button  onClick={() => removeFromCart(each.name)} className='bs' style={{cursor:"pointer", padding: ".5rem", border: "none", color: "red", fontWeight: "bold" }}>Remove</button>
                                                        <button className='bs' style={{cursor:"pointer", margin: ".5rem 1rem", padding: ".5rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>Save for later</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="">
                                                <h5 style={{ margin: ".5rem 1rem", padding: ".5rem" }}>${each.price}</h5>
                                                <div className="cardHeadFlexbtn">
                                                    <button onClick={() => handleDeleteCart(each)} className='bs' style={{cursor:"pointer", margin: "0 .5rem", padding: ".6rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>-</button>
                                                    {/* <button className='bs' style={{ margin: ".5rem .5rem", padding: ".5rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>{.length}</button> */}
                                                    <button onClick={() => handleAddCart(each)} className='bs' style={{cursor:"pointer", margin: "", padding: ".6rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>+</button>

                                                </div>
                                            </div>

                                        </div>
                                    </>


                                )}


                        </div>

                    </div>

                    <div className="cartflex2">

                        <div className="cartflex2Card1" style={{ margin: "", padding: ".8rem", }}>
                            <p >Have a coupon?</p>
                            <div className="d-flex" style={{ margin: "0.5rem 0rem" }}>
                                <input className='bs' style={{ margin: "", padding: ".6rem", border: "none", color: "#127FFF", fontWeight: "bold" }} type="text" placeholder='Add coupon' />
                                <button className='bs' style={{ margin: "", padding: ".6rem", border: "none", color: "#127FFF", fontWeight: "bold" }}>Apply</button>
                            </div>
                        </div>

                        <div className="cartflex2Card1" style={{ margin: ".9rem 0", padding: ".8rem", }}>

                            <div className="flex-space-betwen" >
                                <p style={{ color: "gray" }}>Subtotal:</p>
                                <p style={{ color: "gray" }}>${total}</p>
                            </div>
                            <div className="flex-space-betwen" style={{ margin: ".5rem 0" }}>
                                <p style={{ color: "gray" }}>Shipping:</p>
                                <p style={{ color: "red" }}>${shipping}</p>
                            </div>
                            <div className="flex-space-betwen border_bottom" style={{ margin: ".5rem 0" }}>
                                <p style={{ color: "gray" }}>Tax:</p>
                                <p style={{ color: "green" }}>{tax}%</p>
                            </div>
                            <div className="flex-space-betwen">
                                <p >Total:</p>
                                <p >${grandTotalWithTax}</p>
                            </div>

                            <div className="" style={{ textAlign: "center" }}>
                                <button onClick={checkoutCart} className='bs' style={{cursor:"pointer", width: "60%", margin: "", padding: ".6rem", border: "none", background: "#127FFF", fontWeight: "bold", color: "white" }}>Checkout</button>
                            </div>
                            {/* onClick={() => navigate('/checkout')}  */}
                            <div className="flex-center" style={{ margin: ".5rem 0rem" }}>
                                <FaCcVisa style={{ margin: "0 .5rem", fontSize: "2rem" }} />
                                <FaApplePay style={{ margin: "0 .5rem", fontSize: "2rem" }} />
                                <FaCcPaypal style={{ margin: "0 .5rem", fontSize: "2rem" }} />
                                <SiAmericanexpress style={{ margin: "0 .5rem", fontSize: "2rem" }} />
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <RelatedProduct />
            <div className="cartDis">
                <Discount />
            </div>

            <Footer />
            <SecondFooter />
        </div>
    );
};

export default MyCart;