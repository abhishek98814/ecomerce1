import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/Shop-Context';
import CartItem from './CartItem';

import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
          return null; // Remember to add a return statement for the map function.
        })}
      </div>
      {totalAmount > 0 ? 
        <div className='checkout'>
          <h1>subtotal: ${totalAmount}</h1>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>CheckOut</button>
        </div>
      : 
        <h1>Your Cart is Empty</h1>
      }
    </div>
  );
}

export default Cart;
