import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Images/logo.png'

const Navbar = () => {
    
    return (
        
        <>
        {/* <!-- navbar section ---------------------> */}
    <section className="header">
        <nav>
            <Link to="/"><img src={Logo}/></Link>
            <div className="nav-links" id="navLinks">
                <div className="icon"><i class="fa fa-times"></i></div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/course">COURSE</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
            <div className="icon"><i class="fa fa-bars" onclick="showMenu()"></i></div>
        </nav>
        <div className="text-box">
            <h1>EduFord University, India</h1>
            <p>“Do something now; <br/> your future self will thank you for later.”</p>
            <a href="" className="hero-btn">Know More</a>
        </div>
    </section>
        </>
    )
}

export default Navbar
