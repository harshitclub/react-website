import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Campus from '../Components/Campus'
import Facilities from '../Components/Facilities'
import Testimonial from '../Components/Testimonial'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
        <Navbar/>
        <Course/>
        <Campus/>
        <Facilities/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home
