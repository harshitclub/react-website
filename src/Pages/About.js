import React from 'react'
import Abouti from '../Images/about.jpg'
import Pheader from '../Components/Pheader'
import Footer from '../Components/Footer'

const About = () => {
    return (
        <>
         <Pheader/>  
         {/* <!-- About us content ------------ --> */}
         <h1 className="center-h">About Us</h1>
    <section class="about-us">
        <div class="row">
            <div class="about-col">
                <h1>We're the world's Largest University</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ratione sit sed perspiciatis
                    deserunt exercitationem atque reiciendis velit, quidem rerum, totam nostrum eveniet voluptate
                    adipisci odit consequuntur doloribus quibusdam obcaecati modi pariatur odio neque impedit. Vero
                    eveniet illo velit? Facilis, ratione! Laboriosam, consectetur recusandae. Voluptas commodi
                    voluptatem fugiat a beatae?</p>
                <a href="" class="hero-btn red-btn">Explore Now</a>
            </div>
            <div class="about-col">
                <img src={Abouti} />
            </div>
        </div>
    </section> 
    <Footer/>
        </>
    )
}

export default About
