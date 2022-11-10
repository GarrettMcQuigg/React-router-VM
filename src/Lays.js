import React from "react";
import { Link } from "react-router-dom";
import laysImg from "./lays.jpg";

const Lays = () => {
  return (
    <div>
      <h3>Lays</h3>
      <img src={laysImg} />
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

export default Lays;
