import React from 'react';

class Planeteer extends React.Component {

  state={
    turn:this.props.el.bio
  }

  turner=()=>{
    return this.state.turn===this.props.el.bio ? this.setState({turn:this.props.el.quote}) : this.setState({turn:this.props.el.bio})
  }
  render() {
    const {name, fromUSA, born, bio, quote, pictureUrl, twitter, id} = this.props.el
    // console.log(this.props, this.props.el.name, name)
    const thisYear= new Date().getFullYear()
    const age= thisYear-born
    console.log(age)
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.turner}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.turn}</p>
            <div className="card__detail">
              <p>{twitter}</p><br/>
              <p>Age : {age}</p><br/> 
              <p>{fromUSA ? "USA-based":"Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
