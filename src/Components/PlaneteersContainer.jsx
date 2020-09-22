import React from 'react';
import Planeteer from './Planeteer'


const PlaneteersContainer = (props) => { 

  const planeteers = () => {
    return props.planeteers.map(planeteer => <Planeteer planeteer={planeteer} />)
  }

  // const showModal = () => {
  //   document.getElementById('myModal').style.display = "block"
  // }

  // const closeModal = () => {
  //   document.getElementById('myModal').style.display = "none"
  // }

  return (
    <>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
      <ul className="cards">
        {
          planeteers()
        }
      </ul>
    </>
  )
};

export default PlaneteersContainer;
