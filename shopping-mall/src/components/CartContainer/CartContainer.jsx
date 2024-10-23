import PropTypes from 'prop-types';
import Cart from '../Cart/Cart'
import About from '../About/About'
import './CartContainer.css'
const CartContainer = ({handleIsActiveState, isActive, selectedProducts, handleDelete}) => {
    return (
        <div>
            <h1>cartContainer</h1>
            <div className='toggle'>
                <div onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart ? 'active btn' : 'btn'}`}>Cart</div>
                <div onClick={()=>handleIsActiveState("about")} className={`${isActive.cart ? 'btn' : 'active btn'}`}>About</div>
            </div>
            {
                isActive.cart ? <Cart selectedProducts={selectedProducts} handleDelete={handleDelete}></Cart> : <About></About>
            }
        </div>
    );
};

CartContainer.propTypes = {
    handleIsActiveState:PropTypes.func.isRequired,
    isActive:PropTypes.object.isRequired,
    selectedProducts:PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired
}

export default CartContainer;