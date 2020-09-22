import React from 'react';

class Planeteer extends React.Component {

  state = {
    toggle: false
  }

  clickHandler = () => {
    this.setState((previousState) => ({toggle: !previousState.toggle}))
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card" >
          <img src={this.props.data.pictureUrl} alt={this.props.data.name} className="card__image" onClick={this.clickHandler}/>
          <div className="card__content">
            <div className="card__title">{this.props.data.name}</div>
            <p className="card__text">{!this.state.toggle ? this.props.data.bio : this.props.data.quote}</p>
            <div className="card__detail">
              <p>{this.props.data.twitter}</p>
              <p>{this.props.data.fromUSA ? "USA-based" : "Working Oversees"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
