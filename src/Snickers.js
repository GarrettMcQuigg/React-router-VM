import React from "react";
import { Link } from "react-router-dom";
import snickersImg from './snickers.png'

const Snickers = () => {
  return (
    <div>
      <h3>Snickers</h3>
      <img src={snickersImg} />
      <br />
      <Link
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Go Back
      </Link>
    </div>
  );
};

export default Snickers;
