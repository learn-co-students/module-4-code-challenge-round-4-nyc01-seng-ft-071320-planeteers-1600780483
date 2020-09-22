import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  cardTextHandler = (e) => {
    this.setState({ clicked: !this.state.clicked})
  }

  ageRender = () => {
    let d = new Date()
    let n = d.getFullYear()
    let age = (n - this.props.planeteer.born)
    return age
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.cardTextHandler} src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <div className="card__age">{this.ageRender()} years old</div>
    {this.state.clicked ? <p className="card__text">{this.props.planeteer.quote}</p> : <p className="card__text">{this.props.planeteer.bio}</p>}
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <br />
              {this.props.planeteer.fromUSA ? <p>USA-based</p> : <p>Working overseas</p>}
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
