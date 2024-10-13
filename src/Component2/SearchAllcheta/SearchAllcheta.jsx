import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import './SearchAllcheta.css'
import data from './Data';
import group from '../../Photos/Group 989.png'
import lovebtn from '../../Photos/btn-basic.png'
import SearchNav from './SearchNav';
import SearchResult from './SearchResult';
const SearchAllcheta = () => {
    const [select, setSelect] = useState([]);

    const handleBox = (e) => {
        const value = e.target.value;
        const isChecked = select.includes(value);

        if (isChecked) {
            // If the value is already in the array, remove it
            setSelect(select.filter(option => option !== value));
        } else {
            // If the value is not in the array, add it
            setSelect([...select, value]);
        }
    }

    console.log(select);
    return (
        <div>
            <Navbar />
            <div className="nav">
                <div className="NavHead">

                </div>
            </div>
            <div className="searchAllhead">
                <div className="searchAllflex">

                    <div className="searchAllflex1">


                        {/* <div className="">
                            <select className='searchAllflex1dropDown' name="cars" id="cars">
                                <option value="volvo"><h4>Category</h4></option>
                                <option value="saab">Mobile accessory</option>
                                <option value="opel">Electronics</option>
                                <option value="audi">Smartphones</option>
                                <option value="audi">Modern tech</option>
                                <option value="">  <a href="">See all</a></option>
                            </select>
                        </div> */}

                        <div className="allCheckbox">
                            <h4>Brand</h4>
                            <div className="checkboxItem">
                                <input
                                    type="checkbox"
                                    id="appleCheckbox"
                                    name="options"
                                    value="Apple"
                                    checked={select.includes("Apple")}
                                    onChange={handleBox}
                                />
                                <label htmlFor="appleCheckbox"> Apple </label>
                            </div>
                            <div className="checkboxItem">
                                <input
                                    type="checkbox"
                                    id="huaweiCheckbox"
                                    name="options"
                                    value="Huawei"
                                    checked={select.includes("Huawei")}
                                    onChange={handleBox}
                                />
                                <label htmlFor="huaweiCheckbox"> Huawei </label>
                            </div>

                            <div className="checkboxItem">
                                <input
                                    type="checkbox"
                                    id="poccoCheckbox"
                                    name="options"
                                    value="Pocco"
                                    checked={select.includes("Pocco")}
                                    onChange={handleBox}
                                />
                                <label htmlFor="poccoCheckbox"> Pocco </label>
                            </div>

                            <div className="checkboxItem">
                                <input
                                    type="checkbox"
                                    id="lenovoCheckbox"
                                    name="options"
                                    value="Lenovo"
                                    checked={select.includes("Lenovo")}
                                    onChange={handleBox}
                                />
                                <label htmlFor="lenovoCheckbox"> Lenovo </label>
                            </div>
                        </div>


                        <div className="allCheckbox">
                            <h4>Features</h4>
                            <div className="checkboxItem">
                                <input
                                    type="checkbox"
                                    id="metallicCheckbox"
                                    name="features"
                                    value="Metallic"
                                    checked={select.includes("Metallic")}
                                    onChange={handleBox}
                                />
                                <label htmlFor="metallicCheckbox"> Metallic </label>
                            </div>
                            <div className="checkboxItem">
                                <input
                                    type="checkbox"
                                    id="plasticCoverCheckbox"
                                    name="features"
                                    value="PlasticCover"
                                    checked={select.includes("PlasticCover")}
                                    onChange={handleBox}
                                />
                                <label htmlFor="plasticCoverCheckbox"> Plastic Cover </label>
                            </div>
                            <div className="checkboxItem">
                                <input
                                    type="checkbox"
                                    id="ramCheckbox"
                                    name="features"
                                    value="8GBRam"
                                    checked={select.includes("8GBRam")}
                                    onChange={handleBox}
                                />
                                <label htmlFor="ramCheckbox"> 8GB Ram </label>
                            </div>
                            <div className="checkboxItem">
                                <input
                                    type="checkbox"
                                    id="superPowerCheckbox"
                                    name="features"
                                    value="Superpower"
                                    checked={select.includes("Superpower")}
                                    onChange={handleBox}
                                />
                                <label htmlFor="superPowerCheckbox"> Super Power </label>
                            </div>
                        </div>

                        <div className="allCheckbox">
                            <h4>Price range</h4>
                            <div className="priceRange">
                                <div className="minPrice">
                                    <label htmlFor="minPriceInput">Min</label> <br />
                                    <input type="number" id="minPriceInput" name="minPrice" defaultValue="0" />
                                </div>
                                <div className="maxPrice">
                                    <label htmlFor="maxPriceInput">Max</label> <br />
                                    <input type="number" id="maxPriceInput" name="maxPrice" defaultValue="0" />
                                </div>
                            </div>
                            <button>Apply</button>
                        </div>


                        <div className="allCheckbox">
                            <h4>Condition</h4>
                            <div className="conditionOptions">
                                <div>
                                    <input type="radio" id="anyCondition" name="condition" value="Any" />
                                    <label htmlFor="anyCondition"> Any </label> <br />
                                </div>
                                <div>
                                    <input type="radio" id="refurbishedCondition" name="condition" value="Refurbished" />
                                    <label htmlFor="refurbishedCondition"> Refurbished </label> <br />
                                </div>
                                <div>
                                    <input type="radio" id="brandNewCondition" name="condition" value="Brand New" />
                                    <label htmlFor="brandNewCondition"> Brand new </label> <br />
                                </div>
                                <div>
                                    <input type="radio" id="oldItemsCondition" name="condition" value="Old Items" />
                                    <label htmlFor="oldItemsCondition"> Old items </label> <br />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="searchAllflex2">
                        {
                            select.length !== 0 && <SearchResult select={select} handleBox={handleBox} />
                        }
                        <SearchNav />
                        <div className="searchallrid">
                            {
                                data.map((each, i) =>
                                    <>
                                        <div className="searchCard ">
                                            <img src={each.img} alt="" />
                                            <div className="cardText">
                                                <div className="cardTextbtn">
                                                    <h4>{each.name}</h4>
                                                    <img src={lovebtn} alt="" />
                                                </div>
                                                <h2>${each.price}</h2>
                                                <img src={group} alt="" />
                                                <p>{each.dis}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>




            <Footer />
        </div>
    );
};

export default SearchAllcheta;

