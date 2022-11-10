import React from "react";
import { Link } from "react-router-dom";
import skittlesImg from "./skittles.jpg";
import "./Skittles.css";

const Skittles = () => {
  return (
    <div>
      <h3>Skittles</h3>
      <img className="skits" src={skittlesImg} />
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

export default Skittles;
