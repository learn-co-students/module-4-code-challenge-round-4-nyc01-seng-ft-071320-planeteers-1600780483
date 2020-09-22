import React from 'react';

class SearchBar extends React.Component {

  render() {
    const {search, changeHandler} = this.props
    return (
      <div className="search">
        <input className="searchTerm" name='search' value={search} onChange={(e) => changeHandler(e)}></input>
      </div>
    );
  }

}

export default SearchBar;
