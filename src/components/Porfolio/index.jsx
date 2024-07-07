import React, { useState, useEffect } from "react";
import "./index.css";
import NavigationBar from "../Navigation-bar";

import Footer from "../Footer";
import BuildVision from "../Home-page/Building-vision";
function Portfolio(){
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        async function fetchBuildings() {
            try {
                const response = await fetch('./Buildings.json');
                const data = await response.json();
                                                                                             
                setBuildings(data.locations);
            } catch (error) {
                console.error('Error fetching buildings:', error);
            }
        }
        
        fetchBuildings(); 
    }, []);

    return(
        <>
        <NavigationBar/>
      
        
        <div className="aboutus">
        <section className="aboutus-text">
            <h1>Portfolio</h1>
            <p>Discover Our Creations: A Showcase of Inspiring Projects Reflecting Our <br />
            Dedication To innovation. Quality Craftsmanship and Timeless Design in <br />
            Architecture.  </p>
        </section>
        <section className="portfolio-image">
        </section>
        </div>
        <h1 id="projects" style={{textAlign:'center',marginTop:'5%'}}>PROJECTS</h1>
        <div className="fetcheddata">
           

        {buildings.map(building => (
            <div key={building.id}>
                <img src={building.building_image} alt="building" />
                <p>{building.street} <br />{building.building_name}</p>
               
            </div>
        ))}
        </div>
       
       
        <BuildVision/>
        <Footer/>


        </>
        
    )
}
export default Portfolio