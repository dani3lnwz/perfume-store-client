import React from 'react';
import Banner from '../Banner/Banner';
import NewArriables from '../NewArriables/NewArriables';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <NewArriables></NewArriables>
        </div>
    );
};

export default Home;