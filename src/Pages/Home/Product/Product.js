import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {id, name, img, price, stock, category, shipping, ratings} = product;

    const navigate = useNavigate();

    const navigateToProductDetail = id => {
            navigate(`/stock/${id}`);
    }
    return (
        <div className='product'>
            <img className='w-' src={img} alt="" />
            <h2>{name}
            {/* {name.length > 20 ? name.slice(0, 20) + '...': name} */}
            </h2>

            <p>Price: {price}</p>
            <p>Stock: {stock}</p>
            <p>{category}</p>
            <p>Shipping: {shipping}</p>
            <p>Ratings: {ratings}</p>
            <button onClick={() => navigateToProductDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Product;