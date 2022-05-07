import React from 'react';
import top1 from '../../../images/top-brands/1.jpg';
import top2 from '../../../images/top-brands/2.png';
import top3 from '../../../images/top-brands/3.jpg';
import top4 from '../../../images/top-brands/4.jpg';
import top5 from '../../../images/top-brands/5.jpg';
import top6 from '../../../images/top-brands/6.jpg';
import top7 from '../../../images/top-brands/7.jpg';
import top8 from '../../../images/top-brands/8.png';
import TopBrand from '../TopBrand/TopBrand';

const topBrands = [
    {id: 1, name: 'Versace', img: top1},
    {id: 2, name: 'Black Berry', img: top2},
    {id: 3, name: 'Gucci', img: top3},
    {id: 4, name: 'JPD', img: top4},
    {id: 5, name: 'Kalvin Clain', img: top5},
    {id: 6, name: 'Kalvin Clain', img: top6},
    {id: 7, name: 'Kalvin Clain', img: top7},
    {id: 8, name: 'Kalvin Clain', img: top8},
]


const TopBrands = () => {
    return (
        <div id='topBrands' className='container'>
            <h2 className='text-dark text-center mt-5'>MY TOP BRANDS</h2>
            <div className='row'>
                {
                    topBrands.map(topBrand => <TopBrand
                    key={topBrand.id}
                    topBrand= {topBrand}
                    ></TopBrand>)
                }
            </div>
        </div>
    );
};

export default TopBrands;