import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './update.css'
import { toast } from 'react-toastify';

const Update = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    let { img, name, price, description, supplierName, quantity } = product;
    useEffect(() => {
        const url = `https://rocky-atoll-46081.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then((data) => setProduct(data));
    }, [])

    const delivered = () => {
        let Remaining = parseFloat(+product.quantity) - 1;
        let newInventory = { name, img, description, price, quantity: Remaining, supplierName };

        setProduct(newInventory);

        const url = `https://rocky-atoll-46081.herokuapp.com/product/${productId}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then(data => {
                toast('Delivery Success!')
            })

    }

    const restock = (e) => {
        e.preventDefault();
        let updatedQuantity = parseInt(+product.quantity) + parseInt(e.target.upQuantity.value);
        let newInventory = { name, img, description, price, quantity: updatedQuantity, supplierName };
        

        const url = `https://rocky-atoll-46081.herokuapp.com/product/${productId}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then(data => {
                toast('Delivery Success!')
                setProduct(newInventory);
            })
    }
    // const [product] = useProductDetail(productId);

    // const handleRestockItem = event => {
    //     event.preventDefault();

    // }

    // const {_id, name, img, category, price, quantity, stock, seller} = product;


    return (
        <div n>
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
                        <h5>Description: {description}</h5>
                        <p><b>Price: ${price}</b></p>
                        {/* <p><b>seller: {seller}</b></p> */}
                        {/* <p><small>{description}</small></p> */}
                        <p><small><b>Quantity: {quantity}</b></small></p>
                        {/* <p><small><b>Stock: {stock}</b></small></p> */}
                        {/* <p><small><b>Supplier Name: {supplierName}</b></small></p> */}
                    </div>

                    <div className='delivered-container'>
                        <button onClick={() => delivered(quantity)} className='btn btn-danger'>Delivered</button>
                    </div>
                </div>
            </div>

            <div onSubmit={() => restock(quantity)} className='container'>
                <input style={{ width: "200px", display: "flex" }} className='container' type="number" placeholder='Enter Stock Number' name="" id="" />
                <br />

                <input style={{ width: "120px", display: "flex" }} className='container btn btn-success' type="submit" value="Restock Product" />

            </div>
        </div>
    );
};

export default Update;