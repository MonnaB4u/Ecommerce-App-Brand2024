import React from 'react';
import Subscribe from './Subscribe';
import './Subscribe.css'
const SubscribeSection = () => {
    return (
        <div className='subsHead'>
            <div className="subsText">
                <h3>Subscribe on our newsleter</h3>
                <p>Get daily news on upcoming offers from many suppliers all over the world</p>
                <div className="subsTextSearch">
                    <input type="text" placeholder='Email' />
                    <button>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default SubscribeSection;