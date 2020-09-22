import React from 'react';

class Planeteer extends React.Component {

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={"RENDER PERSON NAME"} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;

// The `Planeteer` component should display the planeteer's image, name, bio,
//  Twitter handle, and conditionally render where they are based. 
//  If they are from the USA, the component should say "USA-based", 
//  otherwise it should say "Working overseas".
