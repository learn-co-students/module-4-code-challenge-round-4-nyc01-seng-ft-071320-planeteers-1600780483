import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false,
    fromUSA: false
  }

  clicked=() => {
    this.setState(prevState => ({ clicked: !prevState.clicked}))
  }

  usBased=() => {
    if (this.props.planeteer.fromUSA === false) {
      return "WORKING OVERSEAS"
    } else {
      return "USA-BASED"
    }
  }

  // description = () => {
  //   if(this.props.planeteer.bio) {
  //     return this.props.planeteer.bio
  //   } else {
  //     this.props.planeteer.description
  //   }
  // }

  render() {
    const {planeteer} = this.props
    return (
      <li className="cards__item">
        <div className="card">
          <img src={planeteer.pictureUrl} alt={planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{planeteer.name}</div>
            <p className="card__text" onClick={this.clicked}>{this.state.clicked ? planeteer.quote : planeteer.bio}</p>
            <div className="card__detail">
              <p>{planeteer.twitter}</p>
            </div>
            <div className="card__details">
              <p>{this.usBased()}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
