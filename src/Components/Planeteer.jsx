import React from 'react';

class Planeteer extends React.Component {

  state={
    clicked: false
  }

  clickHandler=()=>{
    console.log('img click heard by planeteer')
    this.setState((prev)=>({
      clicked: !prev.clicked 
    }))
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.clickHandler} src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.clicked ? this.props.planeteer.quote : this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ? 'USA-based' : 'Working oversees'}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
