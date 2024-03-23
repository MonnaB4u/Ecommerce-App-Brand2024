import React from 'react';
import './ProductDetail.css'
import img from '../../Photos/Banner.png'
const Discount = () => {
    return (
        <div className='Discount'>
            {/* <div className="Discountflex">

                <div className="Discount1">
                    <h2>Super discount on more than 100 USD</h2>
                    <p>Have you ever finally just write dummy info</p>
                </div>

                <div className="Discount2">
                    <button>Shop now</button>
                </div>

            </div> */}
            <img src={img} alt="" />
        </div>
    );
};

export default Discount;