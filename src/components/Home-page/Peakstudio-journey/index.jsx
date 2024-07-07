import React from "react";
import "./index.css";
import {Link} from 'react-router-dom'

function PeakstudioJourney() {
  return (
    <>
      <div className="journey">
        <section className="journey-image">

            <div className="note">
                <span>99%</span>
                <p>Productivity <br />increase on <br />average</p>
            </div>
        </section>
        <section className="journey-text">
          <h1>
            The Peak Studio Journey to <br />
            Architectural Excellence
          </h1>

          <h6>Vision to Reality</h6>
          <p>
            PeakStudio's Journey of Architectural Innovation Architectural <br />
            Ingenuity Unveiled PeakStudio's Path to Excellence.
          </p>

          <h6>Building Dreams</h6>
          <p>
            Pioneering Innovation, Collaborative Excellence, and Unwavering <br />
            Commitment to Transforming Visions into Timeless Realities.
          </p>
        </section>
      </div>
      <div className="mastery-evolution">
        <section className="mastery-sect">
          <h1>Discovering Architectural  <br />Mastery Evolution</h1>
          <p className="mastery-sect-p">Exploring the intersection of Vision, innovation, Craftsmanship  <br />provisions and performing accounting duties.</p>
          <section className="spans">
            <section>
              <span>205M+</span>
               <p>Monthly active users</p>
              </section>
             <section>
              <span>99%</span>
              <p>Customer Satisfaction</p>
              
              </section>
          
          </section>
          <Link to={'/contactus'}><button type="button" className="contactus">Contact Us</button></Link>
          <Link to={'/contactus'}><button type="button" className="bookacall">Book A Call</button></Link>


        </section>
        <section className="mastery-img">
          <div className="mastery-note">
            <section>
            <span>27%  </span>
            <p>Yearly Tax <br /> Savings</p>
            </section>
            <section>
              <div>
              <i class="fa-solid fa-arrow-up"></i>
              </div>
            </section>
          
          </div>
        </section>
      </div>
    </>
  );
}
export default PeakstudioJourney;
