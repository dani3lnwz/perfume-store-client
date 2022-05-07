import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from './../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);

                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Manage your products</h2>
            {
                products.map(product => <div key={product._id}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>*</th>
                                <th>Name</th>
                                <th>ID Number</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{product.name}</td>
                                <td>{product._id}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleDelete(product._id)}>X</button></td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>)
            }

        </div>
    );
};

export default ManageProducts;