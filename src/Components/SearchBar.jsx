import React from 'react';

class SearchBar extends React.Component {

  render() {
    const {search, checked, changeHandler} = this.props
    return (
      <div className="search">
        <input className="searchTerm" name='search' value={search} onChange={(e) => changeHandler(e)}></input>
        <input onChange={ (e)=> checked(e) }type="checkbox" value="filter"></input>
      </div>
    );
  }

}

export default SearchBar;
