import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className='place-order-left'>
       <p className='title'>Delievery Information</p>
       <div className='multi-fields'>
        <input type='text' placeholder='Enter First Name' />
        <input type='text' placeholder='Enter Last Name' />
       </div>
       <input type='email' placeholder='Email Address' />
       <input type='text' placeholder='Street' />
      
      <div className='multi-fields'>
        <input type='text' placeholder='City' />
        <input type='text' placeholder='State' />
       </div>
       <div className='multi-fields'>
        <input type='text' placeholder='Pin-Code' />
        <input type='text' placeholder='Country' />
       </div>
       <input type='number' placeholder='Phone' />
       </div>
      <div className='place-order-rigth'>
      <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
          <div className='card-total-details'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='card-total-details'>
            <p>Delievery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className='card-total-details'>
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          <button>PROCEED TO PAYMENT</button>
          </div>
          
        </div>
      </div>
    </form>
    
  )
}

export default PlaceOrder
