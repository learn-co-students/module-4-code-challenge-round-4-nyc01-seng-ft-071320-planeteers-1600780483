import React from 'react';

class Planeteer extends React.Component {

  state = {
    bio: "",
    quote: "",
    clicked: true
  }

  clickHandler = () => {
    if(this.state.clicked){
      this.setState({clicked: false});
    } else {
      this.setState({clicked: true});
    }
  }

  calculateAge = () => {
    let d = new Date();
    let n = d.getFullYear();
    return n - this.props.planeteers.born
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteers.pictureUrl} alt={this.props.planeteers.name} className="card__image" onClick={this.clickHandler}/>
          <div className="card__content">
            <div className="card__title">{this.props.planeteers.name}</div>
            <p className="card__text">{this.state.clicked ? this.props.planeteers.bio : this.props.planeteers.quote} </p>
            <div className="card__detail">
              <p>{this.props.planeteers.twitter}</p>
              <br />
              <p><br />Age: {this.calculateAge()}</p>
              <br />
              {this.props.fromUSA ? <p>USA-based</p> : <p>Working overseas</p>}
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
