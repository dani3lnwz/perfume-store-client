import React from 'react';
import error from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center'>Sorry Page Not Founf</h2>
            <img height={'500'} className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;