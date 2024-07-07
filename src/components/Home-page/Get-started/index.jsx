import React from "react";
import './index.css'
import{Link} from"react-router-dom"
function Getstarted(){
    return(
        <>
        <div className="getstarted">
            <div className="getstratednote">
                <h1>Start Your Architectural with  <br />PeakStudio  </h1>
                <Link to={'/portfolio'}><button type="button">Get Started</button></Link>
            </div>
        </div>
        
        </>
    )
}
export default Getstarted