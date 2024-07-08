import React, { useState, useEffect } from "react";
import "./index.css";
import NavigationBar from "../Navigation-bar";
import BuildVision from "../Home-page/Building-vision";
import Footer from "../Footer";

export default function Buildings() {
    const [buildings, setBuildings] = useState([]);
    const [loading, setLoading] = useState(true); 
    const link = '/Buildings.json';

    useEffect(() => {
        async function fetchBuildings() {
            try {
                const response = await fetch(link);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetched data:", data);
                setBuildings(data.locations);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching buildings:', error);
                setLoading(false); 
            }
        }

        fetchBuildings();

        // Scroll to the top when new data is fetched
        window.scrollTo(0, 0);

    }, []); 

    useEffect(() => {
        // Scroll to the top when new data is fetched
        window.scrollTo(0, 0);
    }, [buildings]); 

    return (
        <>
            <NavigationBar />
            <div>
                <h1 id="projects" style={{ textAlign: 'center', marginTop: '5%' }}>PROJECTS</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="fetcheddata">
                        {buildings.map(building => (
                            <div key={building.id}>
                                <img src={building.building_image} alt="building" />
                                <p>{building.street} <br />{building.building_name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <BuildVision />
            <Footer />
        </>
    );
}
