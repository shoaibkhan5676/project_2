import React from "react"
import shoe from "../Images/shoe_image.png"
import flipkart from "../Images/flipkart.png"
import amazon from "../Images/amazon.png"


const Section=()=>{
    return(
        <>
        <div className="main_div">
            <div className="text_div">


                <div className="main_heading">
                    <h1>YOUR FEET DESERVE THE BEST</h1>

                </div>
                <div className="other">
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="buttons">
                        <button className="shop_now" >Shop Now</button>
                        <button className="category">Category</button>
                    </div>
                    <p>Also Available on</p>
                    <a href="/"><img src={flipkart} alt="flipkart" /></a>
                    <a href="/"><img src={amazon} alt="amazon" /></a>
                    
                    
                </div>

            </div>
            <div className="image_div">
                <img src={shoe} alt="Shoe" />


            </div>


        </div>
        
        </>
    )
}
export default Section