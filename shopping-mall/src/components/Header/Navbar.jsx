
import PropTypes from 'prop-types';
import './Navbar.css'
const Navbar = ({selectedProducts, price}) => {
    return (
        <div className='nav-container'>
            <h2>Logo</h2>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Cart {selectedProducts.length}</li>
                <li>$ {price}</li>
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    selectedProducts:PropTypes.array.isRequired,
    price:PropTypes.array.isRequired,
}

export default Navbar;