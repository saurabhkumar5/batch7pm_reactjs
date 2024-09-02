import React from "react";
import './Image.css'

function Image({rating,sector,img}) {
  return (
    <div>
      <img
        className="img1"
        src={img}
      />
      <h1>Chinese Wok</h1>
      <h2>Rating:{rating} star</h2>
      <p>sector: {sector}</p>
    </div>
  );
}

export default Image;
