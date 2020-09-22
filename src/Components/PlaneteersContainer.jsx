import React from "react";
import Planeteer from "./Planeteer";

const PlaneteersContainer = (props) => {
  const pArrayMap = props.pArray.map((ele) => <Planeteer planeteer={ele} />);
  return <ul className="cards">{pArrayMap}</ul>;
};

export default PlaneteersContainer;
