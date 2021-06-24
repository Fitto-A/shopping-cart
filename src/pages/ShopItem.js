import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import products from '../catalog';
import './ShopItem.css';
import './Button.css';
import { GrFormAdd, GrFormSubtract, GrFormPrevious } from "react-icons/gr";


const ShopItem = () =>{
    const {amount, sumAmount, restAmount, addToCart, showBtn} = useGlobalContext()
    const {id} = useParams();
    const selectedItem = products.find((item) => item.id == id)

    
    const {src, price, description, category} = selectedItem
 
    return(
        <section className='section-product'>
                <div className='img-section'>
                    <img className="img-product" src={src} alt="" />
                </div>
                <div className="description">
                        <div className='btn-back'>
                            <Link to='/shop'>
                            <GrFormPrevious className='back-icon' />  
                                <button className='btn-back'>Volver a la tienda</button>
                            </Link>
                        </div>

                    <h3>${price}</h3>
                    <div className="division"></div>
                    <h2>{description}</h2>
                    <p className='category'>{category}</p>
                    <div className='quantity'>
                        <button className= {`${amount === 1 ? 'amount-btn amount-btn-grey': 'amount-btn' }`} onClick={restAmount}>
                            <GrFormSubtract />
                        </button>
                        <p>{amount}</p>
                        <button className='amount-btn' onClick={sumAmount}>
                            <GrFormAdd />
                        </button>
                    </div>
                    <button className='btn-shop animated-button add-btn' 
                        onClick={() => addToCart(selectedItem, amount)}
                    >
                        Agregar a carro
                    </button>
                    <div className= {`${showBtn ? 'btn' : 'to-cart'}`}>
                        <Link to='/cart'>
                            <button className='btn-shop animated-button btn-to-cart'>Finalizar compra</button>
                        </Link>
                    </div>
                </div>
        </section>
    )
}

export default ShopItem
