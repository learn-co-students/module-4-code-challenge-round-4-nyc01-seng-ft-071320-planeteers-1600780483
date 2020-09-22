import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input className="searchTerm" name="search" value={this.props.search} placeholder="Search for a Planeteer" onChange={this.props.changeHandler}/>
      </div>
    );
  }

}

export default SearchBar;
