import React, { useContext } from 'react'
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {

const {cartItems , food_list , removeFromCart ,totalCartAmount} = useContext(StoreContext);

const navigate = useNavigate();


  return (
    <div className="Cart">
      <div className="cart-items">
        <div className="cart-items-title">
       <p>Items</p>
       <p>Title</p>
       <p>Price</p>
       <p>Quantity</p>
       <p>Totla</p>
       <p>Remove</p>
    
        </div>
        <br></br>
      <hr/>



      {food_list.map((item , index)=>{
      
          if(cartItems[item._id] > 0){
          return (
       <div>
            <div className="cart-items-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p  onClick={()=>removeFromCart(item._id)} className = 'cross'>x</p>


            </div>
               <hr/>
            </div>


          ) 

        }
        
      })}

    </div>

    <div className="cart-bottom">
      <div className="cart-total">
        <h2>Cart Total</h2>
     <div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>$ {totalCartAmount()}</p>
      </div>
      <div className="cart-total-details">
        <p>DeliveryFee</p>
        <p>$ {(totalCartAmount() === 0 ) ? 0 :2}</p>
      </div>
      <hr></hr>
      <div className="cart-total-details">
        <b>Total</b>
        <b> $ {(totalCartAmount() === 0 ) ? 0 :  totalCartAmount() + 2 } </b>
      </div>
    </div>

          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cart-promo-code">
            <div>
              <p>If you have a promo code , Enter it here</p>
              <div className="cart-promo-code-input">
                <input type="text" placeholder="promo code"/>
                <button>submit</button>
              </div>
      

            </div>
          </div>
          </div>
       </div>

  
    
  )
}

export default Cart
