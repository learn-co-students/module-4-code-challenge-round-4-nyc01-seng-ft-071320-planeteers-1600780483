import React from 'react';

class SearchBar extends React.Component {
  //deliverable wants responsive search bar

  state = {
    searchTerm: "",
    checked: true
  }

  searchHandler = (e) => {
    this.setState({ searchTerm: e.target.value})
    this.props.searchHandler(e.target.value)
  }

  // checkHandler = (e) => {
  //   this.setState({ checked: !this.state.checked })
  //     // this.state.checked ? console.log("true") : console.log("false")
  //   this.props.checkHandler(this.state.checked)
  // }

  render() {
    return (
      <div className="search">
        <input onChange={this.searchHandler} type="text" placeholder="Search" value={this.state.searchTerm} />
        <br />
        <label style={{"color": "black"}}>Sort by Age:</label>
        <input type="checkbox" onChange={this.checkHandler} />
      </div>
    );
  }

}

export default SearchBar;
