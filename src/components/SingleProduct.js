import React from 'react';
import { Link } from 'react-router-dom'

const SingleProduct = ({id, name, src, price, description, category}) => {
    return (
        <Link to={`/shopItem/${id}`} >
            <article className="product">
                <div className="img-container">
                    <img src={src} alt={name} />
                </div>
                <div className="product-info">
                    <p className='price'>${price}</p>
                    <div className='division'></div>
                    <h3 className='product-name'>{description}</h3>
                    <p className='category'>{category}</p>
                </div>
            </article>
        </Link>
    )
}

export default SingleProduct