import React from "react";
import "../Styles/MapSection.css";

function MapSection() {
  return (
    <div className="map-container">
      <h2 className="map-title">Where it all started</h2>
      {/* Iframe is used to display the map on the screen which specified dimensions */}
      {/* Src: Location of map to be displayed */}
      <iframe
        title="mymap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.9682477046026!2d-0.47494334873046723!3d51.53214221661498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e0a6fcc751f%3A0x43eae5c365df7a7a!2sBrunel%20University%20London!5e0!3m2!1sen!2suk!4v1669835132678!5m2!1sen!2suk"
        width={600}
        height={700}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapSection;
