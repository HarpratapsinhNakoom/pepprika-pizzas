import React from 'react'
import '../styles/About.css'

function About() {
    return (
        <div className='about-container'>
            <div className="imagePart">
                <img src="https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8&  auto=format&fit=crop&w=500&q=60" alt="about - 1" className="about-image1 about-img" />
                <img src="https://media.istockphoto.com/id/1347464546/photo/bride-and-groom-on-a-wedding-day.jpg?b=1&s=170667a&w=0&k=20&c=3qlda4CtFWZSHISgC5XDW-zRJ_uSGEk7iO7046Qni0M=" alt="about - 2" className="about-image2 about-img" />
                <img src="https://media.istockphoto.com/id/1313418058/photo/vegetarian-dishes.jpg?b=1&s=170667a&w=0&k=20&c=Mg9fK7dMzEMUkBlJEuEv3goppyRzVmoMCfHmDRiNwtY=" alt="" className='about-image3 about-img' />
                <img src="https://media.istockphoto.com/id/1432903000/photo/little-girl-with-her-grandfather-eating-pizza.jpg?b=1&s=170667a&w=0&k=20&c=owPXBCEh8t-ETl8NlcMbp8s5krRo0CyrWvhgUbR72Bs=" alt="" className='about-img about-image4'/>
            </div>
            <div className="textPart">
                <div className="about-title">FROM SCRATCH DOUGH MADE FRESH <span style={{color:"orange"}}>EVERYDAY</span></div>
                <div className="about-subtitle"><span style={{color:"orange"}}>PEPPRIKA PIZZA</span> IS THE LOCALLY OWNED PLACE FOR DELECIOUS, MADE-FROM-SCRATCH PIZZAS SERVED IN AN UPSACLE, <span style={{color:"orange"}}>COMFORTABLE</span>, FAMILY FRIENDLY ENVIRONMENT</div>
                <div className="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam architecto, ad modi quo itaque officia dolores, minus blanditiis, quaerat deleniti aperiam corrupti quis laudantium omnis mollitia sunt. Incidunt impedit, maxime sed et quia in aperiam dolorum, sit doloremque libero magni voluptas provident sunt quisquam? Laudantium sint voluptatibus explicabo dolorem quis, harum eligendi optio consectetur, vero, repellat maiores reprehenderit sit. Odit, assumenda, dolorum aliquid quis quisquam esse rem a alias sed voluptatibus voluptatum explicabo sint vero saepe tempore placeat cupiditate id quam <br /> <br /> sapiente suscipit quaerat animi reprehenderit adipisci consequuntur. Obcaecati quos non laudantium tempore laborum fugiat doloremque, autem, repellat omnis sunt debitis voluptatum, delectus consectetur accusamus magnam? Amet aperiam explicabo voluptate, dolores ex ad. Adipisci, dignissimos temporibus consequuntur odio exercitationem beatae ratione laborum sunt quae quam at quasi id praesentium molestiae itaque sequi perferendis dicta, minima maiores quod tempora eum a? Aspernatur error quasi voluptates vero optio maxime numquam earum.</div>
            </div>
        </div>
    )
}

export default About