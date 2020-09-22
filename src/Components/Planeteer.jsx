import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false,
    bio: this.props.planeteer.bio,
    quote: this.props.planeteer.quote
  }
  
  findAge = () => {
    let currentYear = new Date().getFullYear()
    let birthYear = this.props.planeteer.born
    return  currentYear - birthYear
  }

    clickHandler = () => {
      if (this.state.clicked === true) {
        this.setState({clicked: false})
      } else {
        this.setState({clicked: true})
      }
    }

  
  render() {
    console.log(this.findAge())
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.clickHandler}/>
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.clicked ? this.state.quote : this.state.bio}</p>
            <div className="card__detail">
              <p>Age: {this.findAge()}</p><br></br>
              <p>Twitter: {this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
