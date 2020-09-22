import React from 'react';

class Planeteer extends React.Component {

  state = {
    toggle: false
  }

  clickHandler = () => {
    this.setState({toggle: !this.state.toggle})
  }

  

  render() {
    let date = new Date().getFullYear()
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.clickHandler} src={this.props.pictureUrl} alt={this.props.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.name}</div>
            <p className="card__text"> {this.state.toggle ? this.props.quote : this.props.bio}</p>
            <div className="card__detail">
              <p>{this.props.twitter}</p><br/>
              <p>{date - this.props.born}</p><br/>
              <p>{ this.props.fromUSA ? "USA Based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
