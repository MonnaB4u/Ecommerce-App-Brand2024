import React from 'react';
import './Recommend.css'
import recoData from './RecoData';
import { useNavigate } from 'react-router-dom';

const Recommend = () => {
    const naviate=useNavigate()
    return (
        <div className='recoHead'>
            <h3 style={{"margin":".5rem", "fontSize":"1.5rem"}}>Recommended iems</h3>
            <div className="recoGrid">
                {
                    recoData.map((each, i) =>
                        <>
                            <div className="recoCard" onClick={()=> naviate(`productDetails/${each.id}`)}>
                                <img src={each.img} alt="" />
                                <h4>${each.price}</h4>
                                <p>{each.name}</p>
                                <p>{each.cheta1}</p>
                            </div>
                        </>
                    )
                }
            </div>

        </div>
    );
};

export default Recommend;