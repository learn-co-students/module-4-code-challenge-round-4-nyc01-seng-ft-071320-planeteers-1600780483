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

  filter=(newArray)=>{
    if (newArray){
      return newArray.filter(el=>el.name.toLowerCase().includes(this.props.search.toLowerCase()) || el.bio.toLowerCase().includes(this.props.search.toLowerCase()))  
    }else{
      return this.state.heros.filter(el=>el.name.toLowerCase().includes(this.props.search.toLowerCase()) || el.bio.toLowerCase().includes(this.props.search.toLowerCase()))  
    }
  }

  summon=(newArray)=>{
    return this.filter(newArray).map(el=><Planeteer key={el.id} el={el}/>)
  }

  componentDidUpdate=()=>{
    console.log("add this person",this.props.add)
    const test = this.state.heros.filter(el=>el.name===this.props.add.name)
    console.log(test.length)
    if (test.length===0){
      console.log("please add",this.props.add)
      fetch(`http://localhost:4000/planeteers`, {
        method: "POST",
        headers: {
        "Content-type": "application/json",
        "accept": "application/json"
        },
        body: JSON.stringify(
          this.props.add
        )
        }).then(res=>res.json()).then(newPerson=>{
          let newArray=[...this.state.heros,newPerson]
          this.summon(newArray)
        })
    }
  }

  render(){
    // console.log(this.state)
    // console.log(this.props.search)
    // console.log("add this person",this.props.add)
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
