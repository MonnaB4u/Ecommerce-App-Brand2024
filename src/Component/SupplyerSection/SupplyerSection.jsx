import React from 'react';
import './SupplyerSection.css'

const SupplyerSection = () => {
    return (
        <div className='supplyHeader'>

            <div className="supplyFlex">

                <div className="supplyText">
                    <h4>  An easy way to send</h4>
                    <h4>  requests to all supplies</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus!</p>
                </div>
                <div className="supplyText2">
                    <div className="">
                    <h4>  An easy way to send</h4>
                    <h4>  requests to all supplies</h4>
                    </div>
                    <button >Send inquiry</button>
                </div>

                <div className="supplyForm">
                    <p>Send quote to suppliers</p>
                    <form action="">
                        <div className="">
                            <input type="text" placeholder='What item you need ' />
                        </div>
                        <textarea name="" id="" cols="60" rows="10"></textarea>
                        <div className="fromFlex">
                            <input type="text" placeholder='Quantiy' />
                            <select name="" id="">
                                <option value="">Pcs</option>
                                <option value="">Pcs</option>
                                <option value="">Pcs</option>
                                <option value="">Pcs</option>
                            </select>
                        </div>
                        <button className='sendinqbtn'>Send inquiry</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SupplyerSection;