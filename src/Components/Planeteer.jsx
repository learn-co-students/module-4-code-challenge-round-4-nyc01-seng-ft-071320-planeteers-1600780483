import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  localClickHandler = () => {
    this.setState((prevState)=>({
      clicked: !prevState.clicked 
    }))
  }

  render() {
    const {planeteer} = this.props
    const date = new Date
    const year = date.getFullYear()
    const age = year - planeteer.born 
    return (
      <li className="cards__item">
        <div className="card">
          <img src={planeteer.pictureUrl} alt={planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{planeteer.name}</div>
            <p className="card__text" onClick={this.localClickHandler}>{this.state.clicked ? planeteer.quote :planeteer.bio}</p>
            <div className="card__detail">
              <p>{planeteer.twitter}</p>
              <p>Age: {age}</p>
              <p>{planeteer.fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
