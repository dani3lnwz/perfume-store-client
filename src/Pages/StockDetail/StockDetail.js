import React from 'react';
import { Link, useParams } from 'react-router-dom';

const StockDetail = () => {
    const {stockId} = useParams();
    return (
        <div>
            <h2>Welcome to stock detail: {stockId}</h2>
            <div className='text-center'>
            <Link to="/update">
                <button className='btn btn-primary'>Update Stocke</button>
            </Link>
            </div>
        </div>
    );
};

export default StockDetail;