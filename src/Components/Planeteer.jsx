import React from 'react';

class Planeteer extends React.Component {

  state ={
    bio: this.props.planeteerObj.bio,
    quote: this.props.planeteerObj.quote,
    clicked: false
  }

  changeClick =() => {
    if (this.state.clicked === true){
      this.setState({clicked: false})
    }else{
      this.setState({clicked: true})
    }
  }

  render() {
    // console.log(this.props.planeteerObj)
    console.log(this.state.clicked)
    console.log(this.props)
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.changeClick} src={this.props.planeteerObj.pictureUrl} alt={this.props.planeteerObj.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteerObj.name}</div>
            <p className="card__text">{this.state.clicked ? this.state.bio : this.state.quote}</p>
            <div className="card__detail">
              <p>{this.props.planeteerObj.twitter}</p>
              <p>{this.props.planeteerObj.fromUSA ? <p>USA-BASED</p> : <p>WORKING OVERSEAS</p>}</p>

            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
