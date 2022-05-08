import { useState, useEffect } from 'react';
const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://rocky-atoll-46081.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return [products]
}

export default useProducts;

