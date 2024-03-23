import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import './SearchAllcheta.css'
import data from './Data';
import group from '../../Photos/Group 989.png'
import lovebtn from '../../Photos/btn-basic.png'
import SearchNav from './SearchNav';
const SearchAllcheta = () => {
    const [select, setSelect] = useState([])
    const handleBox = (e) => {
        const value = e.target.value;
        const isChecked = select.includes(value);

        if (isChecked) {
            setSelect(select.filter(option => option !== value));
        } else {
            setSelect([...select, value]);
        }
    }
    console.log(select);
    return (
        <div>
            <Navbar />
          
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

                            <form action="">
                                <input
                                    type="checkbox"
                                    name="options"
                                    value="Apple"
                                    checked={select.includes("Apple")}
                                    onChange={handleBox}
                                />
                                <label for="vehicle1"> Apple </label> <br />

                                <input type="checkbox" id="vehicle1" name="options" value="Huawei" checked={select.includes("Huawei")} onChange={handleBox} />
                                <label for="vehicle2"> Huawei </label> <br />
                                <input type="checkbox" id="vehicle1" name="options" value="Pocco" checked={select.includes("Pocco")} onChange={handleBox} />
                                <label for="vehicle3"> Pocco</label> <br />
                                <input type="checkbox" id="vehicle1" name="options" value="Lenovo" checked={select.includes("Lenovo")} onChange={handleBox} />
                                <label for="vehicle3"> Lenovo</label> <br />

                            </form>


                            {/* <label htmlFor="">  <input type="checkbox" />Samsung </label>
                                                        <label htmlFor="">  <input type="checkbox" /> Apple</label>
                                                        <label htmlFor="">  <input type="checkbox" /> Huawei</label>
                                                        <label htmlFor="">  <input type="checkbox" />Pocco </label>
                                                        <label htmlFor="">  <input type="checkbox" />Lenovo </label> */}
                        </div>
                        <div className="allCheckbox">
                            <h4>Features</h4>
                            <form action="">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Metalic" checked={select.includes("Metalic")} onChange={handleBox} />
                                <label for="vehicle1"> Metalic </label> <br />

                                <input type="checkbox" id="vehicle2" name="vehicle2" value="PlacticsCover " checked={select.includes("PlacticsCover ")} onChange={handleBox} />
                                <label for="vehicle2"> Plactics cover </label> <br />
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="8GBRam" checked={select.includes("8GBRam")} onChange={handleBox} />
                                <label for="vehicle3"> 8GB Ram</label> <br />

                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Superpower" checked={select.includes("Superpower")} onChange={handleBox} />
                                <label for="vehicle3"> Super power</label> <br />


                            </form>
                        </div>

                        <div className="allCheckbox">
                            <h4>Price range</h4>
                            <form action="">

                                <div className="priceRange">
                                    <div className="">
                                        <label for="vehicle3"> Min</label> <br />
                                        <input type="number" id="vehicle3" name="vehicle3" value="0" />
                                    </div>

                                    <div className="">
                                        <label for="vehicle3"> Min</label> <br />
                                        <input type="number" id="vehicle3" name="vehicle3" value="0" />
                                    </div>
                                </div>
                                <button>Apply</button>
                            </form>

                        </div>
                        <div className="allCheckbox">
                            <h4>Condition</h4>
                            <form action="">
                                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1"> Any </label> <br />

                                <input type="radio" id="vehicle2" name="vehicle2" value="Car" />
                                <label for="vehicle2"> Refurbished </label> <br />
                                <input type="radio" id="vehicle3" name="vehicle3" value="Boat" />
                                <label for="vehicle3"> Brand new</label> <br />

                                <input type="radio" id="vehicle3" name="vehicle3" value="Boat" />
                                <label for="vehicle3"> Old items</label> <br />

                            </form>
                        </div>

                        {/* <div className="">
                            <h4>Rating</h4>
                            <form action="">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1"> Apple </label> <br />

                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                <label for="vehicle2"> Huawei </label> <br />
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                <label for="vehicle3"> Pocco</label> <br />

                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                <label for="vehicle3"> Lenovo</label> <br />

                            </form>
                        </div> */}

                    </div>

                    <div className="searchAllflex2">
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



            {/* 
            <Footer/> */}
        </div>
    );
};

export default SearchAllcheta;

{/* <select className='searchAllflex1dropDown' name="cars" id="cars">
                            <option value="volvo">Category</option>
                            <option value="saab">Mobile accessory</option>  
                            <option value="opel">Electronics</option>
                            <option value="audi">Smartphones</option>
                            <option value="audi">Modern tech</option>
                          <option value="">  <a href="">See all</a></option>
                        </select> */}