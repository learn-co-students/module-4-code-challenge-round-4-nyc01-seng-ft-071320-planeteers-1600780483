import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input type="text" value={this.props.value} onChange={this.props.changeHandler}></input>
      </div>
    );
  }

}

export default SearchBar;
