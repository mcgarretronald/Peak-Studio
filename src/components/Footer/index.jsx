import React from "react";
import './index.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className='footer-div'>
                <section className="signup">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxptxj-YA49vBMbhK_t6WLwKcKlnC6Ukw8ZoEA5Zepj-auHINy" alt="Logo" />
                        <div className="logoname" style={{marginTop:'10px'}}>PeakStudio</div>
                        <br />
                        <h2 className="hire">Hire the Product Designer within 12 hours</h2>
                    </div>

                </section>
                <section >
                    <form >
                        <h3 className="form-title">SIGN UP TO STAY UPDATE</h3>
                        <input type="text" placeholder="Enter email address" />
                        <button type="submit">Subscribe</button>



                    </form>
                </section>

            </div>
            <div className="hr-line">
            <hr />
            </div>
         
            <div className="footer-links">
                <section>
                    <h5>COMPANY</h5>
                    <ul>
                        <li>Our Team</li>
                        <li>Company Vision</li>
                        <li>Our History</li>
                        <li>Inventorys</li>
                    </ul>

                </section>
                <section>
                    <h5>ABOUT US</h5>
                    <ul>
                        <li>The Blog</li>
                        <li>Downloads</li>
                        <li>Change Log</li>
                        <li>Slack Channel</li>
                    </ul>

                </section>
                <section>
                    <h5>RESOURCES</h5>
                    <ul>
                        <li>New Features</li>
                        <li>Roadmap</li>
                        <li>Product Demo</li>
                        <li>Pricing</li>
                    </ul>

                </section>
                <section>
                    <h5>SUPPORTS</h5>
                    <ul>
                        <li>Sosmed</li>
                        <li>YouTube</li>
                        <li>Instagram</li>
                        <li>FaceBook</li>
                    </ul>

                </section>
            </div>
            <hr />
            <div className="copyright">
               <section>
               <i class="fa-regular fa-copyright"></i> All rights reserved  By mcgarret
               </section>
               <section className="term">
                <div>Terms Of Service</div>
                <div>Privacy Policy</div>
               </section>
            </div>

        </div>
    )
}