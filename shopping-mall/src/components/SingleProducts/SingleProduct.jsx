
import PropTypes from 'prop-types';
import './SingleProducts.css'
const SingleProduct = ({product, handleSelectedProduct}) => {
    const {image, description, isFeature, price, name} = product
    return (
        <div className='cart'>
            <img className='img' src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <p>{price}</p>
                <p>{isFeature ? "Feature category" : " Not feature category"}</p>
            </div>
            <button onClick={()=>handleSelectedProduct(product)}>Add To Cart</button>
        </div>
    );
};

SingleProduct.propTypes = {
    product:PropTypes.object.isRequired,
    handleSelectedProduct:PropTypes.func.isRequired,
}

export default SingleProduct;