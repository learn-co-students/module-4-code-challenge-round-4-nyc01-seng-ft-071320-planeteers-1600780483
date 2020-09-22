import React from 'react';

class SearchBar extends React.Component {

  changed = (e) => {
    this.props.changeHandler(e)
  }

  checked = (e) => {
    this.props.sortPlaneteers(e)
  }

  render() {
    return (
      <div className="search">
        <input type="text" onChange={this.changed} value={this.props.searchValue} placeholder="Search Here"></input><br></br>
        <input type="checkbox" name="sort" onChange={this.checked} value="true"></input>
        <label>Sort</label>
      </div>
    );
  }

}

export default SearchBar;
