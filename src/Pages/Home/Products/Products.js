import Product from '../Product/Product';
import './Products.css'
import { useNavigate } from 'react-router-dom';
import useProducts from './../../../hooks/useProducts';

const Products = () => {

    const [products] = useProducts([]);
    const productData = products.slice(0, 6);
    const navigate = useNavigate();

    // useEffect( () => {
    //     fetch('https://rocky-atoll-46081.herokuapp.com/product')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, [])

    return (
        <div id='products' className='container'>
            <h2 className='products-title mt-5'>Our Products</h2>
            <div className='products-container'>
            {
                productData.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
            </div>

            <div className='container mx-auto w-25 navigation-btn'>
                <button className='btn btn-primary my-5 nav-btn' onClick={() => navigate('/manage')}>Manage Inventories</button>
            </div>
            
        </div>
    );
};

export default Products;