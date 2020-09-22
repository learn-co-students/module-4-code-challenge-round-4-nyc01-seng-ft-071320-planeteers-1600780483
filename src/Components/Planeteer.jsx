import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((previousState) => ({clicked: !previousState.clicked}))
  }

  render() {
    console.log("state", this.state)
    const isFromUSA = this.props.planeteer.fromUSA;
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={"RENDER PERSON NAME"} className="card__image" onClick={this.clickHandler} />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            {/* if image = unclicked, print bio, if clicked print quote */}
            <p className="card__text">{this.state.clicked ? this.props.planeteer.quote : this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{isFromUSA ? "USA-based" : "Working overseas"}</p>
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
