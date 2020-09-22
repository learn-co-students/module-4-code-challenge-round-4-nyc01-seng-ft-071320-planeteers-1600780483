import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <form>
          <input type="text" value={this.props.value} onChange={this.props.handleSearch} placeholder="Who would you like to search for?" />
          <input type="checkbox" onChange={this.props.toggleSort}/>
          <label>Sort</label>
        </form>
      </div>
    );
  }

}

export default SearchBar;
