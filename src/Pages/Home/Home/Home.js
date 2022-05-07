import React from 'react';
import Banner from '../Banner/Banner';
import NewArriables from '../NewArriables/NewArriables';
import Products from '../Products/Products';
import TopBrands from './../TopBrands/TopBrands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <NewArriables></NewArriables>
            <TopBrands></TopBrands>
        </div>
    );
};

export default Home;