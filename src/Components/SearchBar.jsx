import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          name="searchWords"
          placeholder="Enter Search Term"
          value={this.props.searchWords}
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
