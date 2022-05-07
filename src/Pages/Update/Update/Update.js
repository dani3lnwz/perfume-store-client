import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from './../../../hooks/useProductDetail';
import './update.css'

const Update = () => {
    const {productId} = useParams();
    const [product] = useProductDetail(productId);

    const handleRestockItem = event => {
        event.preventDefault();

    }

    const {_id, name, img, category, price, quantity, stock, seller} = product;


    return (
       <div>
            <div className='text-center my-5'>
                <h1>Please update your item: {product.name}</h1>
            </div>

            <div className='w-50 mx-auto my-5 update-item'>
                <div>
                    <img className='item-img img-fluid' src={img} alt="" />
                </div>

                <div className="update-item-details-container">
                    <div className='update-item-details'>
                        <h5>{name}</h5>
                        <h5>category: {category}</h5>
                        <p><b>Price: ${price}</b></p>
                        <p><b>seller: {seller}</b></p>
                        {/* <p><small>{description}</small></p> */}
                        <p><small><b>Quantity: {quantity}</b></small></p>
                        <p><small><b>Stock: {stock}</b></small></p>
                        {/* <p><small><b>Supplier Name: {supplierName}</b></small></p> */}
                    </div>

                    <div className='delivered-container'>
                        <button className='btn btn-success'>Delivered</button>
                    </div>
                </div>
            </div>

            <div onSubmit={handleRestockItem} className='container'>
                <input style={{width: "200px", display: "flex"}} className='container' type="number" placeholder='Enter Stock Number' name="" id="" />
                <br /> 
                
                <input style={{width: "120px", display: "flex"}} className='container btn btn-success' type="submit" value="Restock Product" />
                
            </div>
        </div>
    );
};

export default Update;