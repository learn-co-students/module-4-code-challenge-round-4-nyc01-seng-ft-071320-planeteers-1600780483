import React from 'react';

class SearchBar extends React.Component {

  state = {
    age: true
  }

  render() {
    return (
      <div className="search">
        <input className="searchTerm" name="search" value={this.props.search} placeholder="Search for a Planeteer" onChange={this.props.changeHandler}/>
        <label>Sort by Youngest</label> <input type="checkbox" name="age" checked={this.state.age} onChange={this.props.sortHandler}/>
      </div>
    );
  }

}

export default SearchBar;
