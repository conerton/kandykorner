import React from "react";
import "./Locations.css";

export const Locations = ({ location }) => (
  <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <div className="location__address">Address: {location.address}</div>
    <div className="location__sqFootage">
      Square Footage: {location.squareFootage}
    </div>
    <div className="location__handicapAccessiblity">
      Handicap Accessiblity: {location.handicapAccessiblity}
    </div>
  </section>
);
