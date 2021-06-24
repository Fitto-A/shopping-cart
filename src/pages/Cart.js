import React from 'react';
import './Cart.css';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { GrFormAdd, GrFormSubtract, GrFormPrevious } from "react-icons/gr";



const Cart = () => {
    const {cartItems, cartAmount, totalPrice, sumAmountInCart, restAmountInCart, removeCartItem} = useGlobalContext()


    if (cartAmount === 0) {
        return(
            <section className='cart'>
                <header className='empty-cart'>
                    <h2>Tu carro se encuentra vacio.</h2>
                </header>
                <Link to='/shop'>
                    <button className='btn btn-home'>Shop now</button>
                </Link>
            </section>
        )
    }

    return(
        <div className="cart-container">

            <div className="cart">
                <div className="cart-items">
                    <div className='btn-back'> 
                        <Link to='/shop'>
                        <GrFormPrevious className='back-icon' />  
                            <button className='btn-back'>Volver a la tienda</button>
                        </Link>
                    </div>
                    {cartItems.map((item) => {
                        const {id, quantity, src, description, name, category, price} = item
                        if (quantity > 0) {
                            return (
                                <div key={id} className="product-container">
                                    <div  className='cart-product'>
                                        <Link to={`/shopItem/${id}`}>
                                            <img className="img-cart" src={src} alt={name} />
                                        </Link>
                                        <div className="product-description">
                                            <h2>{description}</h2>
                                            <p className='category'>{category}</p>
                                        </div>
                                        <div className="amount-products">
                                            <p className='price'>$ {price}</p>
                                            <div className="amount-container">
                                                <button className='amount-btn' onClick={() => restAmountInCart(id, price)}>
                                                    <GrFormSubtract />
                                                </button>
                                                <p>{quantity}</p>
                                                <button className='amount-btn' onClick={() => sumAmountInCart(id, price)}>
                                                    <GrFormAdd />
                                                </button>
                                            </div>
                                            <br />
                                            <button 
                                                className='remove-btn'
                                                onClick={() => removeCartItem(id, quantity, price)}
                                            >remove item
                                            </button>
                                        </div>
                                    </div>
                                    <div className="divisor"></div>
                                </div>
                                
                            )
                        }

                    })}
                </div>

                <div className="total-container">
                    <p className='total-price'>Total: ${(totalPrice.toFixed(2))}</p>
                    <button className='btn-shop animated-button btn-pay'>Terminar la compra</button>
                </div>

            </div>
            
        </div>
    )
}

export default Cart;