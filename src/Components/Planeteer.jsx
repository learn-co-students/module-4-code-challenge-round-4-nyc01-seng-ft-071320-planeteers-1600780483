import React from 'react';

class Planeteer extends React.Component {

  state = {
    quote: false
  }

  clickHandler = () => {
    this.setState(previousState => ({quote: !previousState.quote}))
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.clickHandler} />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.quote ? this.props.planeteer.quote : this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.fromUSA ? "USA Based" : "Working Overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
