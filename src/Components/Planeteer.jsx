import React from 'react';

class Planeteer extends React.Component {

  state = {
    value: 0
  }

  clickHandler = (e) => {
    fetch("http://localhost:4000/planeteers/" + e.target.id)
    .then(resp => resp.json())
    .then(data => {if(this.state.value === 0){
      this.setState({
        value: 1
      })
    } else {
      this.setState({
        value: 0
      })
    }})
  }

 

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img id = {this.props.planeteer.id} src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} onClick={this.clickHandler} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.value === 0 ? this.props.planeteer.bio : this.props.planeteer.quote}</p>
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
