import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input type="text" name="search" placeholder="Search for Planeteers" value={this.props.search} onChange={(event) => this.props.changeHandler(event)}/>
      </div>
    );
  }

}

export default SearchBar;
