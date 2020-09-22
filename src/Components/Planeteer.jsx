import React from 'react';

class Planeteer extends React.Component {

  based = () => {
    if (this.props.planeteer.fromUSA) {
      return "USA-based"
    } else {
      return "Working Oversees"
    }
  }
  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.props.clickHandler}/>
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.based()}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
