import React from "react";
import "./index.css";
import NavigationBar from "../Navigation-bar";

const Error = () => {
    return (
        <>
        <div className="error">
        <NavigationBar />
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="notfound">404 - Page Not Found</h1>
                <p className="notfound">Oops! The page you're looking for doesn't exist.</p>
              </div>
            </div>

          </div>

        </div>
        

        </>
        
    );
};
export default Error;