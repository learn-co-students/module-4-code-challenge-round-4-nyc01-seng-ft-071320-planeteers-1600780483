import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState(()=>({
      clicked: !this.state.clicked
    }))
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.person.pictureUrl} alt={this.props.person.name} className="card__image" onClick={this.clickHandler}/>
          <div className="card__content">
            <div className="card__title">{this.props.person.name}</div>
            <p className="card__text">{this.state.clicked ? this.props.person.quote : this.props.person.bio}</p>
            <div className="card__detail">
              <p>{this.props.person.twitter}</p>
              <p>{this.props.person.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
