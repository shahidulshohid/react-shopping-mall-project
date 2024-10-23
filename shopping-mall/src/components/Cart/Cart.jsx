
import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({selectedProducts, handleDelete}) => {
    return (
        <div>
            {
                selectedProducts.map(product =>(
                    <div className='selected-container' key={product.id}>
                        <img className='selected-img' src={product.image} alt="" />
                        <p>Name: {product.name}</p>
                        <button onClick={()=>handleDelete(product.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

Cart.propTypes = {
    selectedProducts:PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired
}

export default Cart;