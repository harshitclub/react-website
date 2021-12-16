import React from 'react'
import Logo from '../Images/logo.png'
import {Link} from 'react-router-dom'

const Pheader = () => {
    return (
        <>
           <section class="sub-header">
        <nav>
            <a href="index.html"><img src={Logo}/></a>
            <div class="nav-links" id="navLinks">
                <div class="icon"><i class="fa fa-times" onclick="hideMenu()"></i></div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/course">COURSE</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                </div>
            <div class="icon"><i class="fa fa-bars" onclick="showMenu()"></i></div>
        </nav>
        {/* <h1>About Us</h1> */}
    </section>
        </>
    )
}

export default Pheader
