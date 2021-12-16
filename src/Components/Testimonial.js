import React from 'react'
import Harshit from '../Images/Harshit.jpg'
import Deep from '../Images/deepanshu.jpg'

const Testimonial = () => {
    return (
        <>
            {/* <!-- testimonials section ----------------> */}

<section className="testimonials">
    <h1>What Our Student Says?</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <div className="row">
        <div className="testimonial-col">
            <img src={Deep}/>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero soluta possimus magnam dolor
                    incidunt aliquid, minima ex tempore suscipit quidem dolores, quaerat qui, ad enim!</p>
                <h3>Deepanshu</h3>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        </div>
        <div className="testimonial-col">
            <img src={Harshit}/>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero soluta possimus magnam dolor
                    incidunt aliquid, minima ex tempore suscipit quidem dolores, quaerat qui, ad enim!</p>
                <h3>Harshit</h3>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default Testimonial
