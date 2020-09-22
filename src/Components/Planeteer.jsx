import React from 'react';

class Planeteer extends React.Component {

  state ={
    clicked: false
  }

  clickHandler = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.clickHandler} />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.clicked ? this.props.planeteer.quote : this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              {this.props.planeteer.fromUSA ? <p>USA-based</p> : <p>Working overseas</p>}
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
