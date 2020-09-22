import React from 'react';

class Planeteer extends React.Component {

  renderFromUsa = () =>{
    if(this.props.fromUSA !== true){
      return <p> Working overseas </p>
    } else
      return <p> USA-BASED </p>
  }



  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={()=> this.props.clickHandler(this.props.clickHandler.id)}/>
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <span>{this.renderFromUsa()}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
