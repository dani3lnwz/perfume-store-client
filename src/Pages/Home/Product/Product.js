import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {_id, name, img, price, stock, category, shipping, ratings} = product;

    const navigate = useNavigate();

    const navigateToProductDetail = id => {
            navigate(`/product/${id}`);
    }
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}
            {/* {name.length > 20 ? name.slice(0, 20) + '...': name} */}
            </h2>

            <p>Price: {price}</p>
            <p>Stock: {stock}</p>
            <p>{category}</p>
            <p>Shipping: {shipping}</p>
            <p>Ratings: {ratings}</p>
            <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Product;