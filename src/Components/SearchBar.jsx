import React from 'react';

class SearchBar extends React.Component {

  search = (e) => {
    this.props.searchHandler(e)
  }

  render() {
    return (
      <div className="search">
        <label>Search</label>
        <input className="searchTerm" placeholder="What would you like to search for?" type="text" name="search" value={this.props.searchValue} onChange={this.search} />
        <label>Sort</label>
        <input type="checkbox" name="sort" checked={this.props.checked} onChange={()=>this.props.sort()} />
      </div>
        

    );
  }

}

export default SearchBar;
