import React from 'react';

class SearchBar extends React.Component {

  state = {
    value: ""
  }


  

  render() {
    return (
      <div className="search">
        <input onChange={(e) => {this.props.searchHandler(e.target.value)}}  className="search" />
      </div>
    );
  }

}

export default SearchBar;
