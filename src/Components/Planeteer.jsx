import React from "react";

class Planeteer extends React.Component {
  state = {
    bio: true,
  };

  localClickHandler = () => {
    this.props.clickHandler(this.props.planeteer);
  };

  localRenderHandler = () => {
    this.props.renderHandler(this.props.planeteer);
  };

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img
            src={this.props.planeteer.pictureUrl}
            alt={this.props.planeteer.name}
            className="card__image"
            onClick={this.localClickHandler}
          />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.props.renderHandler()}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <br></br>
              <p>
                {this.props.planeteer.fromUSA
                  ? "USA-based"
                  : "Working Overseas"}
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Planeteer;
