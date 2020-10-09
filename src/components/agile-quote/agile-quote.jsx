import React, { Component } from "react";
import "./agile-quote.css";

class AgileQuoteComponent extends Component {
  render() {
    return (
      <div className="agile-quote">
        <p className="quote">
          {/* <span className="quote-marks">&ldquo;</span> */}
          <span
            href="https://github.com/salomonelli/personal-portfolio"
            className="quote-content"
          >
            This website was modified from Sara Steiert's code on github with
            her permission.{" "}
          </span>
         <div className="image-container">
         <img
            arai-label="external link"
            className="quote-arrow"
            src="link-icon.svg"
          />{" "}
          <a
            className="quote-link"
            href="https://github.com/salomonelli/personal-portfolio"
          >
            {" "}
            You can find the original source code here.{" "}
          </a>
          <a
            arai-label="external link"
            className="quote-arrow"
            src="link-icon.svg" href="https://github.com/salomonelli/personal-portfolio">
              
          </a>{" "}
         </div>
          {/* <span className="quote-author">- Théoden, son of Thengel</span> */}
        </p>
      </div>
    );
  }
}

export default AgileQuoteComponent;
