import React, { Component } from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  state={
    heros:[],
  }

  componentDidMount=()=>{
    fetch('http://localhost:4000/planeteers')
    .then(res=>res.json())
    .then(data=>this.setState(()=>({heros:data})))
  }

  summon=()=>{
    return this.state.heros.map(el=><Planeteer key={el.id} el={el}/>)
  }
  render(){
    console.log(this.state)
    return (
      <ul className="cards">
        {
          this.summon()
        }
      </ul>
    )
  }
  
};

export default PlaneteersContainer;
