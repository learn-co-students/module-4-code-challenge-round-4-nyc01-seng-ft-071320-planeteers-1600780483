import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    const currentYear = new Date().getFullYear()
    const age = currentYear - this.props.planeteer.born
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.clickHandler}/>
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.clicked ? this.props.planeteer.quote : this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>Age: {age}</p>
              <p>{this.props.planeteer.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Planeteer;
