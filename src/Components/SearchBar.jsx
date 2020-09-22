import React from 'react';

class SearchBar extends React.Component {

  state = {
    search: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(() => ({ [e.target.name]: e.target.value }), () => this.props.searchHandler(this.state.search))
  }

  handleCheck = (e) => {
    this.props.handleCheck(e.target.checked)
  }

  render() {
    return (
      <div className="search">
        <h3>Search</h3>
        <input type="text" name="search" placeholder="Who would you like to search for?" value={this.state.search} onChange={this.changeHandler} />
        <h5>Sort</h5>
        <input type="checkbox" onChange={this.handleCheck} />
      </div>
    );
  }

}

export default SearchBar;
