import React from 'react'
import { Link } from 'react-router-dom'

const Error = () =>{
    return(
        <div className='error-page'>
            <h3>La página que buscabas ya no se encuentra, volvé a la tienda!</h3>
            <Link to='/shop'>
                <button className='btn btn-home'>Shop now</button>
            </Link>
        </div>
    )
}

export default Error