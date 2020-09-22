import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
          <input
            type="text"
            placeholder="Who would you like to search for?"
            value={this.props.searchTerm}
            onChange={this.props.changeHandler}
          />
      </div>
    );
  }
}

export default SearchBar;
