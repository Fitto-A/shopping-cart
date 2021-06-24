import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import logo from '../images/logo.png'
import { HiShoppingCart } from "react-icons/hi";


const Navbar = () =>{
    const {cartAmount} = useGlobalContext()
    return(
        <nav className='navbar'>
            <Link to='/'>
                <img src={logo} alt='logo' className='nav-logo'/>
            </Link>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li className='cart-icon'>
                    <Link to='/cart'> <HiShoppingCart/> </Link>
                </li>
                <li className='nav-amount'>
                    <p>{cartAmount}</p>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar