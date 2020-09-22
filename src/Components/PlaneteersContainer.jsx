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

  filter=()=>{
    return this.state.heros.filter(el=>el.name.toLowerCase().includes(this.props.search.toLowerCase()) || el.bio.toLowerCase().includes(this.props.search.toLowerCase()))  
  }

  summon=()=>{
    return this.filter().map(el=><Planeteer key={el.id} el={el}/>)
  }

  render(){
    // console.log(this.state)
    console.log(this.props.search)
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
