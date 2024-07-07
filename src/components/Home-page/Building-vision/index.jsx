import React from "react";
import './index.css'
import { Link } from "react-router-dom";

export default function BuildVision(){
    return (
        <div className="buildvision">
            <h1 className="buildvision-title">Let's Start Building Your Vision</h1>
            <h5 className="buildvision-subtitle">Reach Out to Us for Expert Guidance,Collaborative Design, and Tailored Solutions to Shape Your <br />
            Vision into Reality </h5>
            <div className="buildvissionbtn">
            <Link to={'/contactus'}><button className="contactus">Contact Us</button></Link>
            <Link to={'/contactus'}><button className="bookacall">Book A Call</button></Link>

            </div>
           
        </div>
    )
}