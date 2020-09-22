import React from 'react';

class SearchBar extends React.Component {

  changed = (e) => {
    this.props.changeHandler(e)
  }

  render() {
    return (
      <div className="search">
        <input type="text" onChange={this.changed} value={this.props.searchValue} placeholder="Search Here"></input>
      </div>
    );
  }

}

export default SearchBar;
