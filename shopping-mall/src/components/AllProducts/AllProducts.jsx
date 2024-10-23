
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './AllProducts.css'
import SingleProduct from '../SingleProducts/SingleProduct';

const AllProducts = ({handleSelectedProduct}) => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data.products))
    }, [])

    return (
        <div>
            <h1>AllProducts.jsx</h1>
            {
                products.map(p => <SingleProduct key={p.id} product={p} handleSelectedProduct={handleSelectedProduct}></SingleProduct>)
            }
        </div>
    );
};

AllProducts.propTypes = {
    handleSelectedProduct:PropTypes.func.isRequired,
}

export default AllProducts;