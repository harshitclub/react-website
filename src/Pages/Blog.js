import React from 'react'
import Blogi from '../Images/blog.jpg'
import Footer from '../Components/Footer'
import Pheader from '../Components/Pheader'

const Blog = () => {
    return (
        <>
        <Pheader/>
        {/* <!-- Blog page content ---------------> */}
        <h1 className="center-h">Blog</h1>
    <section class="blog-content">
        <div class="row">
            <div class="blog-left">
                <img src={Blogi}/>
                <h2>What We Achieve Together!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatem praesentium fuga
                    doloribus facere voluptates, cumque harum corporis tenetur qui ullam, quibusdam laboriosam magnam.
                    Alias neque quia nostrum ducimus cumque eveniet veritatis, nesciunt amet voluptates a ea quibusdam
                    consequatur esse.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque earum optio quas
                    reprehenderit, quis sed autem placeat labore possimus molestias accusamus quasi quaerat vel, culpa
                    adipisci libero tenetur mollitia numquam atque perferendis aut. Quia voluptate omnis temporibus
                    illum provident?</p>
                <br/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni animi possimus labore nemo voluptates
                    cum recusandae, voluptas, ut placeat neque tenetur quod inventore, vitae ipsum tempora et repellat
                    commodi eaque quis quisquam sint a officiis? Modi adipisci nesciunt harum laboriosam est error
                    facilis cum, odit, quos fugit architecto, tempore aliquam.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores rem aliquid laboriosam,
                    ad vitae officia quisquam porro dolorem adipisci sapiente accusantium iste tempore illum odit.
                    Accusamus saepe veritatis doloremque delectus sunt molestias consequatur, dicta minima tempora ad
                    repellat reiciendis ab alias blanditiis eaque, ex dignissimos, architecto inventore doloribus. Sed
                    ut ratione sint. Autem tempore earum non mollitia aliquid dolor.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, doloremque quod. Dignissimos, quam!
                    Quibusdam accusamus minima quo, reiciendis provident ad neque ex quaerat ea assumenda laborum hic,
                    eligendi autem. Quam totam repudiandae maxime fugit dolores labore quasi soluta fuga sequi dolore.
                    Nobis dolores, saepe tempore magni sint fugit distinctio provident iste laudantium laborum autem
                    assumenda quisquam omnis facilis voluptates atque!</p>

                <div class="comment-box">
                    <h3>Leave a comment</h3>
                    <form class="comment-form">
                        <input type="text" placeholder="Enter Name"/>
                        <input type="email" placeholder="Enter E-mail"/>
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <button type="Submit" class="hero-btn red-btn">POST COMMENT</button>
                    </form>
                </div>

            </div>
            <div class="blog-right">
                <h3>Post Categories</h3>
                <div>
                    <span>Business Analytics</span>
                    <span>21</span>
                </div>
                <div>
                    <span>Data Science</span>
                    <span>28</span>
                </div>
                <div>
                    <span>Machine Learning</span>
                    <span>15</span>
                </div>
                <div>
                    <span>Computer Science</span>
                    <span>34</span>
                </div>
                <div>
                    <span>AutoCad</span>
                    <span>42</span>
                </div>
                <div>
                    <span>Journalism</span>
                    <span>22</span>
                </div>
                <div>
                    <span>Commerce</span>
                    <span>30</span>
                </div>
            </div>
        </div>
    </section>
        <Footer/>
        </>
    )
}

export default Blog
