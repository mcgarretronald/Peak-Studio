import React, { useState, useEffect } from "react";
import "./index.css";
import NavigationBar from "../Navigation-bar";
import Footer from "../Footer";
import BuildVision from "../Home-page/Building-vision";

function Portfolio() {
    const [buildings, setBuildings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBuildings() {
            try {
                const response = await fetch('/Buildings.json'); // Ensure this path is correct
                const text = await response.text();
                try {
                    const data = JSON.parse(text);
                    setBuildings(data.locations);
                } catch (jsonError) {
                    throw new Error(`Response is not valid JSON: ${text}`);
                }
            } catch (error) {
                console.error('Error fetching buildings:', error);
                setError('Failed to fetch building data. Please try again later.');
            }
        }
        
        fetchBuildings(); 
    }, []);

    return (
        <>
            <NavigationBar />
            <div className="aboutus">
                <section className="aboutus-text">
                    <h1>Portfolio</h1>
                    <p>
                        Discover Our Creations: A Showcase of Inspiring Projects Reflecting Our
                        Dedication To innovation, Quality Craftsmanship, and Timeless Design in
                        Architecture.
                    </p>
                </section>
                <section className="portfolio-image">
                </section>
            </div>
            <h1 id="projects" style={{ textAlign: 'center', marginTop: '5%' }}>PROJECTS</h1>
            <div className="fetcheddata">
                {error ? (
                    <p className="error">{error}</p>
                ) : (
                    buildings.map(building => (
                        <div key={building.id}>
                            <img src={building.building_image} alt={`Image of ${building.building_name}`} />
                            <p>{building.street} <br />{building.building_name}</p>
                        </div>
                    ))
                )}
            </div>
            <BuildVision />
            <Footer />
        </>
    );
}

export default Portfolio;
