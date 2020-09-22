import React from 'react';

class Planeteer extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState((previousState)=>({ clicked: !previousState.clicked }))
    
  }

  

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.handleClick}
        />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            {this.state.clicked ? <p className="card__text">{this.props.planeteer.quote}</p> : <p className="card__text">{this.props.planeteer.bio}</p> } 


            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p></p>
              {this.props.planeteer.fromUSA ? <p>USA-based</p> : <p> Working Overseas</p>} 
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;

// If they are from the USA, the component should say "USA-based", 
// otherwise it should say "Working overseas".
