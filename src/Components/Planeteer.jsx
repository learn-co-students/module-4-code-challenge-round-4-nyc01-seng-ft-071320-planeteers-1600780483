import React from 'react';

class Planeteer extends React.Component {

  state = {
    renderQuote: false
  }

  clickHandler = () => {
    this.setState((previousState)=>({
      renderQuote: !previousState.renderQuote
    }))
  }

  getAge = () => {
    const date = new Date()
    const year = date.getFullYear()
    const age = year - this.props.born
    console.log(`${this.props.name} is ${age} years old.`)
    return age
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.pictureUrl} alt={this.props.name} className="card__image" onClick={this.clickHandler} />
          <div className="card__content">
            <div className="card__title">{this.props.name}</div>
            <p><strong>{this.getAge()}</strong> years old</p>
            <p className="card__text">{this.state.renderQuote ? this.props.quote : this.props.bio}</p>
            <div className="card__detail">
              <p>{this.props.twitter}</p>
              <p>{this.props.fromUSA ? "USA-based" : "Overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
