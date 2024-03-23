import React, { useEffect, useState } from 'react';
import './CheckOut.css'

import { FaCcVisa } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import Navbar from './../../Component/Navbar/Navbar';
import NavUpper from '../../Component/Navbar/NavUpper';
import { PDFDownloadLink, PDFViewer, Document, Page, Text } from '@react-pdf/renderer';
import PDFDownloadComponent from './PDFDownloadComponent';
import { Navigate, useNavigate } from 'react-router-dom';




const CheckOut = (props) => {
    const navigate = useNavigate()
    const [order, setOrder] = useState([]);
    const [cartData, setcartData] = useState([]);

    useEffect(() => {
        if (props.order !== null && props.order !== undefined && props.order.length !== 0) {
            setOrder(props.order);
        }
    }, [props.order]);

    useEffect(() => {
        if (props.orderJason !== null && props.orderJason !== undefined && props.orderJason.length !== 0) {
            setcartData(props.orderJason);
        }
    }, [props.orderJason]);


    const [loggedInUser, setLoggedInUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem("register");
        if (storedUser) {
            const { userEmail, username } = JSON.parse(storedUser);
            setLoggedInUser({ userEmail, username });
        }
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [bankName, setBankName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [onderConf, setOrderConf] = useState('');

    const getChekoutData = () => {

        if (loggedInUser.name !=="" && order.length !== 0) {
            setOrderConf({
                "name": loggedInUser.username,
                "email": loggedInUser.userEmail,
                "address": address,
                "city": city,
                "bankName": bankName,
                "cardNumber": cardNumber,
                "onderConf": onderConf,
                "tax": order[0].tax,
                "shipping": order[0].shipping,
                "total": order[0].total,
                "grandTotal": order[0].grandTotalWithTax
            })
        } else {
            alert("check login and you order")
            navigate('/')

        }
    }


    console.log(onderConf);

    return (
        <div>
            <NavUpper />
            <div className="checkOut">
                <div>

                </div>
                <div className="checkoutflex">
                    <div className="checkoutflex1 ">
                        <div className="checkoutflex1flex">

                            <div className="form1">
                                <h2>Billing Address</h2>
                                <div className="" style={{ marginTop: "1rem" }}>
                                    <label htmlFor="">Full Name</label> <br />
                                    <input type="text" placeholder={loggedInUser ? loggedInUser.username : 'your name'} value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="" style={{ marginTop: "1rem" }}>
                                    <label htmlFor="">Email</label> <br />
                                    <input type="text" placeholder={loggedInUser ? loggedInUser.userEmail : 'your email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="" style={{ marginTop: "1rem" }}>
                                    <label htmlFor="">Address</label> <br />
                                    <input type="text" placeholder='your address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>

                                <div className="" style={{ marginTop: "1rem" }}>
                                    <label htmlFor="">City</label> <br />
                                    <input type="text" placeholder='your city' value={city} onChange={(e) => setCity(e.target.value)} />
                                </div>

                            </div>

                            <div className="form2">
                                <h2>Payment</h2>

                                <div className="" style={{ marginTop: "1rem" }}>
                                    <label htmlFor="">Accepted Card</label> <br />
                                    <div className="d-flex" style={{ margin: ".5rem 0rem", }}>
                                        <FaCcVisa style={{ margin: " 0rem", fontSize: "2rem" }} />
                                        <FaApplePay style={{ margin: "0 .5rem", fontSize: "2rem" }} />
                                        <FaCcPaypal style={{ margin: "0 .5rem", fontSize: "2rem" }} />
                                        <SiAmericanexpress style={{ margin: "0 .5rem", fontSize: "2rem" }} />
                                    </div>
                                </div>

                                <div className="" style={{ marginTop: "1rem" }}>
                                    <label htmlFor="">Name of bank name</label> <br />
                                    <input type="text" placeholder='your bank name' value={bankName} onChange={(e) => setBankName(e.target.value)} />
                                </div>

                                <div className="" style={{ marginTop: "1rem" }}>
                                    <label htmlFor="">Credit card number</label> <br />
                                    <input type="number" name="cardnumber" placeholder="1111-2222-3333-4444" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                                </div>

                                <div className="" style={{ marginTop: "1rem" }}>
                                    <label htmlFor="">Exp Month</label> <br />
                                    <input type="text" placeholder='your city' />
                                </div>
                            </div>
                        </div>

                        <div className="flex-space-betwen lowersInput">
                            <div className="" style={{ marginTop: "1rem" }}>
                                <label htmlFor="">State</label> <br />
                                <input type="text" placeholder='your city (optional)' />
                            </div>

                            <div className="" style={{ marginTop: "1rem" }}>
                                <label htmlFor="">Zip</label> <br />
                                <input type="text" placeholder='1001 (optional)' />
                            </div>

                            <div className="" style={{ marginTop: "1rem" }}>
                                <label htmlFor="">Exp year</label> <br />
                                <input type="text" placeholder='your Exp year (optional)' />
                            </div>

                            <div className="" style={{ marginTop: "1rem" }}>
                                <label htmlFor="">CVV</label> <br />
                                <input type="text" placeholder='your city (optional)' />
                            </div>
                        </div>
                        <div className="coBtn">
                            <button onClick={getChekoutData} className=''>Continue to Checkout</button>
                        </div>

                    </div>

                    <div className="checkoutflex2">
                        <div className="cartflex2Card1" style={{ margin: "0 .7rem", padding: ".8rem" }}>
                            <h3>Order price summary</h3>
                            <div className="flex-space-betwen">
                                <p style={{ color: "gray" }}>Subtotal:</p>
                                <p style={{ color: "gray" }}>${order.length !== 0 ? order[0].total : ""}</p>
                            </div>
                            <div className="flex-space-betwen" style={{ margin: ".5rem 0" }}>
                                <p style={{ color: "gray" }}>Shipping:</p>
                                <p style={{ color: "red" }}>${order.length !== 0 ? order[0].shipping : ""}</p>
                            </div>
                            <div className="flex-space-betwen border_bottom" style={{ margin: ".5rem 0" }}>
                                <p style={{ color: "gray" }}>Tax:</p>
                                <p style={{ color: "green" }}>${order.length !== 0 ? order[0].tax : ""}%</p>
                            </div>
                            <div className="flex-space-betwen">
                                <p>Total:</p>
                                <p>${order.length !== 0 ? order[0].grandTotalWithTax : ""}</p>
                            </div>

                        </div>

                        {
                            onderConf.length != 0
                                ?
                                <div className="Ogs">

                                    <h3 className='border_bottom' >Order Grand Summery</h3>
                                    <div className="">
                                        {
                                            cartData.map((each, i) =>
                                                <>
                                                    <p style={{ fontWeight: "bold", fontSize: ".9rem" }}>PD Name:{each.name}, --Price:${each.price}+vat</p>
                                                </>

                                            )
                                        }
                                    </div>

                                    <div className="">
                                        <p>Name: {onderConf.name}</p>
                                        <p>Email: {onderConf.email}</p>
                                        <p>Address: {onderConf.address}</p>
                                        <p>City: {onderConf.city}</p>
                                        <p>BankName:{onderConf.bankName}</p>
                                        <p>Card Number: {onderConf.cardNumber}</p>
                                        <p>Ammount: ${onderConf.total}</p>
                                        <p>Shipping: ${onderConf.shipping}</p>
                                        <p className='border_bottom'>Tax: {onderConf.tax}%</p>
                                        <p>Total Ammount: ${onderConf.grandTotal}</p>
                                        <p></p>

                                    </div>
                                    <div className="">
                                        <PDFDownloadComponent checkoutData={onderConf} />
                                    </div>
                                </div>
                                :
                                <div className=""></div>
                        }



                    </div>

                </div>
            </div>



        </div>
    );
};

export default CheckOut;

