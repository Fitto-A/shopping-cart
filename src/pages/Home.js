import React from 'react'
import { Link } from 'react-router-dom'

import home from '../images/home.jpg'
import bolsoNegro from '../images/bolso-negro.jpg'
import portalentes from '../images/Portalentes-5.jpg'
import riñonera from '../images/Riñonera-blanca2.jpg'

const Home = () =>{
    return(
        <>
            <div className='home'>
                <div className="home-center">
                    <article className='home-info'>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <Link to='/shop'>
                            <button className='btn btn-home'>Shop now</button>
                        </Link>
                    </article>
                    {/* <img src={home} alt="home" className='home-img'/> */}
                </div>
            </div>
            <div className="footer">
                <h4 className='subtitle-home'>Los más vendidos!</h4>
                <div className="images-home">
                    <Link to='/shop'>
                        <img src={bolsoNegro} alt="Bolso Negro" />
                    </Link>
                    <Link to='/shop'>
                        <img src={portalentes} alt="Portalentes" />
                    </Link>
                    <Link to='/shop'>
                        <img src={riñonera} alt="Riñonera" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home