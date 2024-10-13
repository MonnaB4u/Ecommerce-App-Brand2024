import React from 'react';
import { FaDiceFour, FaHamburger } from 'react-icons/fa';


const SearchResult = ({ select, handleBox }) => {
    return (
        <div>
            <div className='SearchNav'>
                <div className="SearchNavflex flex-space-betwen">

                    <div className="flex-center">
                        {select.map((option, index) => (
                            <div key={index} style={{margin:".5rem 0.5rem"}}>
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={true}
                                    disabled={true}
                                    onChange={handleBox}
                                />
                                <label>{option}</label>
                            </div>
                        ))}


                    </div>

                    <div className="">
                        <FaHamburger className='SearchNavicon' />
                        <FaDiceFour />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchResult;