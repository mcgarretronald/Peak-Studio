import React, { useState, useEffect } from "react";
import "./index.css";
import NavigationBar from "../Navigation-bar";
import BuildVision from "../Home-page/Building-vision";
import Footer from "../Footer";

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchServices() {
            try {
                const response = await fetch('../../../../services.json');
                const data = await response.json();
              
                setServices(data.Services);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        }
        fetchServices();
    }, []);

    return (
        <>
            <NavigationBar />
            <div className="aboutus">
                <section className="aboutus-text">
                    <h1>Services</h1>
                    <p>
                        Explore Our Expertise: Elevating Spaces, Enriching Lives, and Bringing Your <br />
                        Vision to Life with Our Comprehensive Range Of Architectural Designs and <br />
                        Consultations Services.
                    </p>
                </section>
                <section className="service-image"></section>
            </div>
            <div className="services">
                {services.map(({ name, description, image }, index) => (
                    <div className="service" key={index}>
                        <div className="service-offerd-image">
                            <img src={image} alt={name} />
                        </div>
                        <div className="service-info">
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <BuildVision />
            <Footer />
        </>
    );
}

export default Services;
