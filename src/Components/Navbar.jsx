import React from "react"
import web from "../Images/brand_logo.png";

const Navbar=()=>{
    return(
        <>
        <div className="container">

            <div className="logo_div">
                <img src={web} alt="" />

            </div>
            <div className="link_div">
                <ul>
                    <li><a href="" className="active">Menu</a></li>
                    <li><a href="">Location</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>


            </div>
            <div className="button_div">
                <button>Login</button>


            </div>
        </div>
        
        
        </>
    )
}
export default Navbar