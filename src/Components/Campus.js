import React from 'react'
import London from '../Images/london.jpg'
import NewYork from '../Images/new york.jpg'
import Washington from '../Images/w.jpg'

const Campus = () => {
    return (
        <>
          {/* <!-- Campus section ----------- --> */}

<section className="campus">
    <h1>Our Global Section</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

    <div className="row">
        <div className="campus-col">
            <img src={London}/>
            <div className="layer">
                <h3>LONDON</h3>
            </div>
        </div>
        <div className="campus-col">
            <img src={NewYork} />
            <div className="layer">
                <h3>NEW YORK</h3>
            </div>
        </div>
        <div className="campus-col">
            <img src={Washington} />
            <div className="layer">
                <h3>WASHINGTON</h3>
            </div>
        </div>
    </div>
</section>  
        </>
    )
}

export default Campus
