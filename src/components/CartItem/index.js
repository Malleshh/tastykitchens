import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item">
          <div className="cart-item-info">
            <img src={imageUrl} alt={name} className="cart-item-image" />
            <h1 className="cart-item-desktop-name">{name}</h1>
          </div>
          <div className="cart-qty-price-cont">
            <h1 className="cart-item-mobile-name">{name}</h1>
            <div className="cart-qty-container">
              <button
                className="decrement-quantity"
                type="button"
                onClick={decreaseQuantity}
              >
                <BsDashSquare size={16} />
              </button>
              <p className="item-quantity">{quantity}</p>
              <button
                className="increment-quantity"
                type="button"
                onClick={increaseQuantity}
              >
                <BsPlusSquare size={16} />
              </button>
            </div>
            <p className="price">
              <FaRupeeSign size={12} /> {cost * quantity}
            </p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
