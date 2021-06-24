import React from 'react';
import products from '../catalog';
import SingleProduct from './SingleProduct';

const Products = () =>{
    return(
        <section className='container'>
            <div className="shop-title">
                <h3>Catálogo temporada 2021</h3>
            </div>
            <div className="shop-container">
                {products.map((item)=> {
                    return <SingleProduct key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}

export default Products