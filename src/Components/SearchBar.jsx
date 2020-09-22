import React from 'react';

class SearchBar extends React.Component {

  changeHandler = (e) => {
    this.props.changeHandler(e.target.value)
  }

  render() {
    return (
      <div className="search">
        <input className="searchTerm" name="search" value={this.props.searchVal} onChange={this.changeHandler} />
      </div>
    );
  }

}

export default SearchBar;
