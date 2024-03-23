import React from 'react';
import Navbar from './../Navbar/Navbar';
import Headermain from './../Header/Headermain';
import OffersAndDeals from './../OffersAndDeals/OffersAndDeals';
import HomeAndOutdoor from './../HomeAndOutdoor/HomeAndOutdoor';
import ElectronicsAndgadget from './../ElectronicsAndgadget/ElectronicsAndgadget';
import SupplyerSection from './../SupplyerSection/SupplyerSection';
import Recommend from './../Recommend/Recommend';
import SupplySection from '../Supply/SupplySection';
import Subscribe from '../Subscribe/Subscribe';
import SubscribeSection from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

const Allcomponent = () => {
    return (
        <div>
            <Navbar />
            <Headermain />
            <OffersAndDeals />
            <HomeAndOutdoor />
            <ElectronicsAndgadget />
            <SupplyerSection />
            <Recommend />
            {/* <ExtraService/> */}
            <SupplySection />
            <SubscribeSection/>
            <Footer/>
            
        </div>
    );
};

export default Allcomponent;