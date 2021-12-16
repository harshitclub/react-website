import React from 'react'
import Library from '../Images/library.png'
import Cafe from '../Images/cafeteria.png'
import Basket from '../Images/basketball.png'
import Footer from '../Components/Footer'
import Pheader from '../Components/Pheader'

const Course = () => {
    return (
        <>
        <Pheader/>
        {/* <!-- course section ----------------> */}
        {/* <h1 className="center-h">Courses</h1> */}
<section class="course">
    <h1>Courses We Offer</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

    <div class="row">
        <div class="course-col">
            <h3>Intermediate</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur odio pariatur excepturi sit!
                Harum, saepe unde. Vero atque saepe ab unde! Excepturi, sapiente in!</p>
        </div>
        <div class="course-col">
            <h3>Degree</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur odio pariatur excepturi sit!
                Harum, saepe unde. Vero atque saepe ab unde! Excepturi, sapiente in!</p>
        </div>
        <div class="course-col">
            <h3>Post Graduation</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur odio pariatur excepturi sit!
                Harum, saepe unde. Vero atque saepe ab unde! Excepturi, sapiente in!</p>
        </div>
    </div>
</section>

{/* <!-- Facilities section ---------------> */}

<section class="facilities">
    <h1>Our Facilites</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <div class="row">
        <div class="facilities-col">
            <img src={Library}/>
            <h3>World Class Library</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime accusamus provident?</p>
        </div>
        <div class="facilities-col">
            <img src={Basket}/>
            <h3>Largest Play Ground</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime accusamus provident?</p>
        </div>
        <div class="facilities-col">
            <img src={Cafe}/>
            <h3>Tasty and Healthy Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime accusamus provident?</p>
        </div>
    </div>
</section>
        <Footer/>
        </>
    )
}

export default Course
