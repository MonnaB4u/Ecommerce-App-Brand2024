import React, { useEffect, useState } from 'react';
import Navbar from './../Navbar/Navbar';
import './ProductDetail.css'


import avatar from '../../Photos/Avatar.png'

import { useParams } from 'react-router-dom';
import { IoAppsOutline } from "react-icons/io5";
import { MdOutlineReviews } from "react-icons/md";
import { FaRegHeart, FaRegStar } from "react-icons/fa6";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import ProductDetailsLower from './ProductDetailsLower';
import RelatedProduct from './RelatedProduct';
import Footer from './../Footer/Footer';
import Discount from './Discount';
import Offer from '../OffersAndDeals/Offer';
import recoData from '../Recommend/RecoData';
import homeData from '../HomeAndOutdoor/HomeData';




const ProductDetail = () => {

    const [data, setData] = useState([...homeData, ...Offer, ...recoData]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const { id } = useParams();
    const foundData = data.find(item => item.id === id);

    const clickAdd = (item) => {
        try {
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            existingCartItems.push(item);
            localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
            console.log('Item added to cart successfully');
        } catch (error) {
            console.error('Error storing data:', error);
        }
    }

    const findName = cartItems.find(cart => cart.name === foundData?.name);

    if (!foundData) {
        return <div>Loading...</div>; // Or handle error state gracefully
    }

    return (
        <div className="">
            <Navbar />
            <div className='ProductDetail'>
                <div className="ProductDetailflex">

                    <div className="pdflex1 ">
                        <img src={foundData.img} alt="" />
                    </div>

                    <div className="pdflex2 ">
                        <MdOutlineEventAvailable style={{ color: "#00B517" }} />
                        <i style={{ color: "#00B517" }}>in stock</i>
                        <h4>{foundData.name}</h4>

                        <div className="flex_center pdReview">

                            <div className="star">
                                <FaRegStar style={{ color: "#FA3434" }} />
                                <FaRegStar style={{ color: "#FA3434" }} />
                                <FaRegStar style={{ color: "#FA3434" }} />
                                <FaRegStar style={{ color: "#FA3434" }} />
                                <FaRegStar /> (9.3)
                            </div>

                            <div className="flex-center review1" style={{}}>
                                <MdOutlineReviews />
                                <p >32 reviews</p>
                            </div>

                            <div className="flex-center">
                                <IoAppsOutline />
                                <p>154 sold</p>
                            </div>

                        </div>

                        <div className="pdPrice">

                            <div className="" style={{ paddingRight: "1rem" }}>
                                <h4 style={{ color: "#FA3434" }}>${foundData.price}</h4>
                                <small>10-100 pcs</small>
                            </div>

                            <div className="" style={{ borderLeft: "2px solid #000", paddingRight: "1rem", paddingLeft: ".3rem" }}>
                                <h4>{foundData.price}</h4>
                                <small>100-200 pcs</small>
                            </div>

                            <div className="" style={{ borderLeft: "2px solid #000", paddingLeft: ".3rem" }}>
                                <h4>{foundData.price}</h4>
                                <small>100-700 pcs</small>
                            </div>

                        </div>

                        <div className="priceTable" style={{ margin: "1rem 0" }}>
                            <p>Price:</p>
                            <p>Neotiable</p>

                        </div>
                        <div className="border_bottom"></div>
                        <div className="priceTable ">
                            <p>Type:</p>
                            <p>Classic</p>

                        </div>

                        <div className="priceTable ">
                            <p>Material:</p>
                            <p>Plastic</p>

                        </div>

                        <div className="priceTable ">
                            <p>Design:</p>
                            <p>Modern nice</p>

                        </div>

                        <div className="border_bottom" style={{ margin: "1.4rem 0" }}></div>
                        <div className="priceTable">
                            <div className="priceTable2">
                                <p>Customization:</p>
                            </div>
                            <div className="priceTable2">
                                <p>customize logo and design</p>
                            </div>

                        </div>

                        <div className="priceTable ">
                            <p>Protection:</p>
                            <p>Refund Policy</p>

                        </div>

                        <div className="priceTable ">
                            <p>Warrenty:</p>
                            <p>2 yeats full warrenty</p>

                        </div>
                        <div className="border_bottom" style={{ margin: "1.4rem 0" }}></div>
                    </div>


                    <div className="pdflex3 ">

                        <div className="pdflex3border">

                            <div className="pdflex3Avatar ">
                                <img className='avatarImg' src={avatar} alt="" />
                                <div className="" style={{ margin: "0 .5rem" }}>
                                    <p>Supplier</p>
                                    <p>Guanjoi Trading LLC</p>
                                </div>
                            </div>

                            <div className="border_bottom" style={{ margin: "1.4rem 0" }}></div>

                            <div className="pdflex3CInfo">
                                <img style={{ width: "2rem" }} src="https://media.istockphoto.com/id/166012239/vector/germany-flag.jpg?s=1024x1024&w=is&k=20&c=wMk1et0SQmq9vnvCcnuB8TscgTN-k7ax19yVwaxOOvc=" alt="" />
                                <div className="" style={{ color: "gray", margin: "0 .5rem" }}>
                                    <p>Germeny , Brlin</p>
                                </div>
                            </div>

                            <div className="pdflex3CInfo">
                                <MdOutlineVerifiedUser style={{ color: "#00B517", width: "2rem" }} />
                                <p style={{ color: "#00B517", margin: "0 .5rem" }}>Verified Seller</p>
                            </div>

                            <div className="pdflex3CInfo">
                                <GiWorld style={{ color: "gray", width: "2rem" }} />
                                <p style={{ color: "gray", margin: "0 .5rem" }}>Worldwide Shipping</p>
                            </div>

                            <div className="">
                                <button className='pdflex3btn1'>Send inquiry</button> <br />
                                <button className='pdflex3btn2'>Seller's profile</button>
                            </div>

                        </div>

                        <div className="pdflex3save ">

                            <div className="">
                                <div className="pdflex3save2 ">
                                    <FaRegHeart style={{ color: "#127FFF" }} />
                                    <p style={{ color: "#127FFF", margin: ".5rem" }}>Save for later</p>
                                </div>
                                {
                                    findName ?

                                        <p style={{ color: "red", margin: ".5rem" }}>Already have in the cart</p>

                                        :
                                        <button onClick={() => clickAdd(foundData)} className='pdflex3btn1'>  <IoCartOutline style={{ fontSize: "1.3rem" }} /> Add to Cart</button>
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ProductDetailsLower foundData={foundData} />
            <RelatedProduct />
            <Discount />
            <Footer />
        </div>
    );
};

export default ProductDetail;