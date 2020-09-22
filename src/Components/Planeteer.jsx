import React from "react";

class Planeteer extends React.Component {
  // console.log(this.props.planeteer)
  //come back and conditionally render 18/19

  state = {
    text: this.props.planeteer.bio,
  };

  bioHandler = () => {
    if (this.state.text === this.props.planeteer.bio) {
      this.setState({ text: this.props.planeteer.quote });
    } else this.setState({ text: this.props.planeteer.bio });
  };
  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img
            src={this.props.planeteer.pictureUrl}
            alt={this.props.planeteer.name}
            className="card__image"
          />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text" onClick={this.bioHandler}>
              {this.state.text}
            </p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ? "USA" : "OVER SEAS"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Planeteer;
