import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  renderBio = () => {
    if(this.state.clicked){
      return <p className="card__text">{this.props.planeteer.quote}</p>
    } else {
      return <p className="card__text">{this.props.planeteer.bio}</p>
    }
  }

  clicked = (e) => {
    let previousState = this.state.clicked
    this.setState({
      clicked: !previousState
    })
  }

  renderLocation = () => {
    if(this.props.planeteer.fromUSA){
      return <p>USA Based</p>
    } else {
      return <p>Working overseas</p>
    }
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.clicked}/>
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            {this.renderBio()}
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              {this.renderLocation()}
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
