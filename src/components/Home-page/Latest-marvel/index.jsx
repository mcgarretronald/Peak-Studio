import React, { useState, useEffect } from "react";
import './index.css';

function LatestMarvel() {
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
    const fetchBuildings = async () => {
        try {
            const response = await fetch('../../../../Buildings.json');
            const data = await response.json();

            setBuildings(data.locations);
        } catch (error) {
            console.error('Error fetching buildings:', error);
        }
    };
        
        fetchBuildings(); 
    }, []);

    return (
        <div className="latest-marvel">
            <div className="latest-heading">
                <section>
                    <h2>Our Latest Architectural Marvel</h2>
                    <p>Introducing our Latest Architectural Marvel - Pushing Boundaries and Redefining Architectural Excellence</p>
                </section>
                <section>
                    <button type="button">View more</button>
                </section>
            </div>

            <div className="buildings">
                {buildings.map(building => (
                    <div key={building.id}>
                        <img src={building.building_image} alt="building" />
                        <p>{building.street} <br />{building.building_name}</p>
                       
                    </div>
                ))}
               
            </div>
            <p className="scroll">Scroll <i class="fa-solid fa-arrow-right"></i> </p>
        </div>
    );
}

export default LatestMarvel;
