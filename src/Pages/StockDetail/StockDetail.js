import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from './../../hooks/useProductDetail';

const StockDetail = () => {
    const {productId} = useParams();
    const [product] = useProductDetail(productId);

    return (
        <div>
            <h2>You are about to book: {product.name}</h2>
            <div className='text-center'>
            <Link to={`/update/${productId}`}>
                <button className='btn btn-primary'>Update Stock</button>
            </Link>
            </div>
        </div>
    );
};

export default StockDetail;