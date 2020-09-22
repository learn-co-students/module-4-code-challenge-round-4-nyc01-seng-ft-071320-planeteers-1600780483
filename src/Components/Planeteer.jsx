import React from 'react';

class Planeteer extends React.Component {

  state = {
    bio: this.props.planeteer.bio,
    quote: this.props.planeteer.quote,
    value: 0
  }

  clickHandler = () => {
    if(this.state.value === 0){
      this.setState({
        value: 1
      })
    } else {
      this.setState({
        value: 0
      })
    }
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} onClick={this.clickHandler} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.value === 0 ? this.state.bio : this.state.quote}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
