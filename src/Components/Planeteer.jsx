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

  getPersonAge = () => {
    const d = new Date()
    const year = d.getFullYear()
    return (year - this.props.person.born)
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
              <p>{this.props.person.fromUSA ? "USA-BASED" : "WORKING OVERSEAS"}</p>
              <p>Age: {this.getPersonAge()}</p>
              <button onClick={()=> this.props.remove(this.props.person)}>Remove Planeteer</button>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
