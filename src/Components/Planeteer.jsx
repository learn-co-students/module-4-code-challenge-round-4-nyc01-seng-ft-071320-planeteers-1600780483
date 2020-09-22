import React from 'react';

class Planeteer extends React.Component {
  
  state = {
    isClicked: false
  }

  clickHandler = () => {
    if (this.state.isClicked) {
      this.setState({isClicked: false})
    } else {
      this.setState({isClicked: true})
    }
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} onClick={this.clickHandler} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.isClicked ? this.props.planeteer.quote : this.props.planeteer.bio}</p>
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
