import React from 'react'
import {BsCart4} from 'react-icons/bs'
import "./Header.scss"

const Header = () => {
  return (
    <div className='navbar'>
        <div className='nav-title'>
            <h2>FakeShop</h2>
        </div>
        <div className="nav-right">
          <div className="my-cart-text-div">
            <h4 className='my-cart-text'>My Cart</h4>
          </div>
          <div className="cart">
            <BsCart4 className='cart-logo'/>
          </div>
        </div>
    </div>
  )
}

export default Header