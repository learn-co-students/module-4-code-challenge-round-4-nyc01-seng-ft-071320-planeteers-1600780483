import React from 'react';
class Planeteer extends React.Component {

  // character.state.clicked ? {this.props.quote} : {this.props.bio}
  // or on click of the image it should toggele between the props of that character


  state={
    clicked: false
  }
  
  changeHandler = () =>{
    this.setState(()=>({ clicked: !this.state.clicked }))
  }
  
  
  
  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.changeHandler} src={this.props.character.pictureUrl} alt={this.props.character.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.character.name}</div>
            <p name="quote" className="card__text">{this.state.clicked ? this.props.quote : this.props.bio}</p>
            <div className="card__detail">
              <p>{this.props.character.twitter}</p>
              <p>{this.props.character.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
