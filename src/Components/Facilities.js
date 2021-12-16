import React from 'react'
import Library from '../Images/library.png'
import Basket from '../Images/basketball.png'
import Cafe from '../Images/cafeteria.png'

const Facilities = () => {
    return (
        <>
            {/* <!-- Facilites Section ------------------> */}

<section className="facilities">
    <h1>Our Facilites</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <div className="row">
        <div className="facilities-col">
            <img src={Library}/>
            <h3>World Class Library</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime accusamus provident?</p>
        </div>
        <div className="facilities-col">
            <img src={Basket} />
            <h3>Largest Play Ground</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime accusamus provident?</p>
        </div>
        <div className="facilities-col">Name
            <img src={Cafe} />
            <h3>Tasty and Healthy Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime accusamus provident?</p>
        </div>
    </div>
</section> 
        </>
    )
}

export default Facilities
