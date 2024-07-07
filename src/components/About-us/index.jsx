import React from "react";
import NavigationBar from "../Navigation-bar";
import "./index.css"
import PeakstudioJourney from "../Home-page/Peakstudio-journey";
import Footer from "../Footer";
import BuildVision from "../Home-page/Building-vision";
const Aboutpage = () => {

    return (
        <>
        <NavigationBar/>
      
        
        <div className="aboutus">
        <section className="aboutus-text">
            <h1>About us</h1>
            <p>Crafting Timeless Spaces with Innovative Designs. Meticulos  Attention to <br />
            Detail, and a Passion for Sustainable Living to Inspire, Enrich, and Transform the <br />
            Way We Experience Our Built Environment.  </p>
        </section>
        <section className="aboutus-image">

        </section>

        </div>
        <PeakstudioJourney/>
        <BuildVision/>
        <Footer/>


        </>
    )
}
export default Aboutpage