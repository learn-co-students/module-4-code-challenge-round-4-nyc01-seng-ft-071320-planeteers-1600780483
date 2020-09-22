import React from 'react';

class Planeteer extends React.Component {
  state = {
    clicked: false,
  };

  clickHandler = () => {
    this.setState((previousState) => ({
      clicked: !previousState.clicked,
    }));
  };

  birthday = () => {
    let today = new Date();
    let year = today.getFullYear();
    return year - this.props.planeteer.born;
  };

  render() {
    const {
      // id,
      name,
      fromUSA,
      // born,
      bio,
      quote,
      pictureUrl,
      twitter,
    } = this.props.planeteer;
    return (
      <li className='cards__item'>
        <div className='card'>
          <img
            src={pictureUrl}
            alt={name}
            className='card__image'
            onClick={this.clickHandler}
          />
          <div className='card__content'>
            <div className='card__title'>{name}</div>
            <p className='card__text'>{this.state.clicked ? quote : bio}</p>
            <div className='card__detail'>
              <p>{twitter}</p>
              <p>Age: {this.birthday()}</p>
              <p>{fromUSA ? 'USA-Based' : 'Working Overseas'}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Planeteer;
