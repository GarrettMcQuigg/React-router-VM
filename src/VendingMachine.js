import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <h3>
        <Link
          onClick={() => {
            window.location.href = "/lays";
          }}
        >
          Lays
        </Link>
      </h3>
      <h3>
        <Link
          onClick={() => {
            window.location.href = "/snickers";
          }}
        >
          Snickers
        </Link>
      </h3>
      <h3>
        <Link
          onClick={() => {
            window.location.href = "/skittles";
          }}
        >
          Skittles
        </Link>
      </h3>
    </div>
  );
};

export default VendingMachine;
