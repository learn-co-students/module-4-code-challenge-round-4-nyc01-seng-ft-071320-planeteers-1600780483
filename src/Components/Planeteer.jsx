import React from 'react';


class Planeteer extends React.Component {

  state = {
    clicked: true
  }

  fromUSA = () => {
    return this.props.planeteer.fromUSA ? "USA-based" : "Working overseas"
  }

  clickedBio = () => {
    return this.state.clicked ? this.props.planeteer.bio : this.props.planeteer.quote
  }

  clickHandler = (obj) => {
    this.setState((previousState)=>({
      clicked: !previousState.clicked
    }))
  }

  render() {
    // console.log(this.state.clicked)
    return (
      <li className="cards__item">
        <div className="card" >
          <img onClick={()=>this.clickHandler(this.props.planeteer)} src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.clickedBio()}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.fromUSA()}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}


export default Planeteer;
