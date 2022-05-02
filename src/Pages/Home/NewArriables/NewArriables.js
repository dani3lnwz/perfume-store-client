import React from 'react';

import new1 from '../../../images/new-arriable/1.jpg';
import new2 from '../../../images/new-arriable/2.jpg';
import new3 from '../../../images/new-arriable/3.jpg';
import new4 from '../../../images/new-arriable/4.jpg';
import new5 from '../../../images/new-arriable/5.jpg';
import new6 from '../../../images/new-arriable/6.jpg';
import NewArriable from '../NewArriable/NewArriable';

const newArriables = [
    {id: 1, name: 'Kalvin Clain', img: new1},
    {id: 2, name: 'Kalvin Clain', img: new2},
    {id: 3, name: 'Kalvin Clain', img: new3},
    {id: 4, name: 'Kalvin Clain', img: new4},
    {id: 5, name: 'Kalvin Clain', img: new5},
    {id: 6, name: 'Kalvin Clain', img: new6},
]

const NewArriables = () => {
    return (
        <div id='newArriables' className='container'>
            <h2 className='text-primary text-center mt-5'>New Arraibles</h2>
            <div className='row'>
                {
                    newArriables.map(newArriable => <NewArriable
                        key={newArriable.id}
                        newArriable= {newArriable}
                    ></NewArriable>)
                }
            </div>
        </div>
    );
};

export default NewArriables;