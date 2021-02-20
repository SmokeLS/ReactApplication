import React from "react";
import loading from "../../assets/loading.gif";
import "./Preloader.css";

export default function Preloader() {
  return <img className="preloader" alt="loading" src={loading} />;
}
