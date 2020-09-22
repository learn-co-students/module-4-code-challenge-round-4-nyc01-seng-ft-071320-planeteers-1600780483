import React from 'react';

class Planeteer extends React.Component {

  state = {
    text: this.props.p.bio
  }

  renderText = () => {
    return this.state.text === this.props.p.bio ? this.setState(() => ({ text: this.props.p.quote })) : this.setState(() => ({ text: this.props.p.bio }))
  }

  todaysYear = () => {
    let d = new Date()
    return d.getFullYear()
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.p.pictureUrl} alt={this.props.p.name} className="card__image" onClick={this.renderText} />
          <div className="card__content">
            <div className="card__title">{this.props.p.name}</div>
            <p>Age: {this.todaysYear() - this.props.p.born}</p>
            <p className="card__text">{this.state.text}</p>
            <div className="card__detail">
              <p>{this.props.p.twitter}</p>
              <p>{this.props.p.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
