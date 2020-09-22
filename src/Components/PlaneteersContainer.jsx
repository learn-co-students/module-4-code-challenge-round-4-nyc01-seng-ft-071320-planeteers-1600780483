import React from 'react';
import Planeteer from './Planeteer';

const PlaneteersContainer = (props) => {
  function renderPlaneteers() {
    const { planeteers } = props;
    return planeteers.map((planeteer) => (
      <Planeteer key={planeteer.id} planeteer={planeteer} />
    ));
  }

  return <ul className='cards'>{renderPlaneteers()}</ul>;
};

export default PlaneteersContainer;
