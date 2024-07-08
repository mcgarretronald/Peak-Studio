import React from "react";
import "./index.css";
import { useEffect } from "react";
import NavigationBar from "../Navigation-bar";
import BuildVision from "../Home-page/Building-vision";
import Footer from "../Footer";
export default function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavigationBar />
            <div className="contact">
                <div className="aboutus">
                    <section className="aboutus-text">
                        <h1>Contact Us</h1>
                        <p>Get in touch:Let's Start Building Your Dream Together.  <br />
                            Reach out to our Team Of Experts Today !  </p>
                    </section>
                    <section className="contact-image">
                    </section>
                </div>
                <div className="mapcontainer">
                    <h1 className="mapcontainer-title">Find us on Google Maps</h1>
                    <h5 className="mapcontainer-subtitle">
                        If you have any questions you can report them with the following information,
                        so that it is easy for us to reply to your message
                    </h5>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15955.524422103994!2d36.900044799999996!3d-1.2419072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1720358766850!5m2!1sen!2ske"
                        width="100%"
                        height="700"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="message">
                    <h1>Send us a message</h1>
                    <h5>Fill out the form and our Team will get back to you as quickly as possible</h5>
                </div>
                <form className="contact-form">
                    <div>
                        <section>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter yourName" required />
                        </section>
                        <section>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your Email" required />
                        </section>

                    </div>
                    <div>
                        <section>
                            <label htmlFor="message">Subject</label>
                            <input id="message" placeholder="Your Subject" required></input>
                        </section>
                        <section>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" placeholder="Enter your Phone" required />
                        </section>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0px", marginTop: "10px" }}>
                        <label htmlFor="message" style={{ marginBottom: "10px" }}>Message</label>
                        <textarea id="message" placeholder="Write Your Message Here" required></textarea>
                    </div>
                    <div className="checkbox">
                        <section>
                            <span><input type="checkbox" name="checkbox" id="checkbox"  style={{ width: "20px", height: "20px" }} required/></span>
                            <label htmlFor="checkbox" id="checkbox" name="checkbox"> <p id="checkbox">I agree to the  Terms of Service and Privacy Policy </p></label>
                        </section>
                        <section className="contact-submit-btn">
                            <button type="submit" className="contactus">Submit</button>
                        </section>
                    </div>

                </form>

            </div>
            <BuildVision />
            <Footer />


        </>
    )

}
