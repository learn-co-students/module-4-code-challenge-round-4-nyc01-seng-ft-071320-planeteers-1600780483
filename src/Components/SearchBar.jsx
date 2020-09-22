import React from 'react';

class SearchBar extends React.Component {

  search = (e) => {
    this.props.searchHandler(e)
  }

  render() {
    return (

        <input className="search" placeholder="What would you like to search for?" type="text" name="search" value={this.props.searchValue} onChange={this.search} />

    );
  }

}

export default SearchBar;
