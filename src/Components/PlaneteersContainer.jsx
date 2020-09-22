import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

state = {
  charArray: []
}

  componentDidMount = () =>{
    const charUrl = "http://localhost:4000/planeteers/"
    fetch(charUrl).then(resp => resp.json()).then(data => this.setState(()=> ({charArray: data})))
  }

  showCharacters = () =>{
    return this.state.charArray.map(character => <Planeteer key={character.id} character={character} bio={character.bio} quote={character.quote} />)
  }


  searchFunction = () =>{
    return this.state.charArray.find(character => character.name === this.props.searchInput)
  }

  foundChar = () =>{
    
  }

render =() =>{
  return (
    <ul className="cards">
      {this.showCharacters()}
      {this.searchFunction()}
    </ul>
  )
    }

};

export default PlaneteersContainer;
