import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input type='text' placeholder='by name or bio'/>
      </div>
    );
  }

}

export default SearchBar;
