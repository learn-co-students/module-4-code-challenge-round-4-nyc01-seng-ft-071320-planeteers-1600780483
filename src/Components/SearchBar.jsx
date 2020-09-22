import React from 'react';

class SearchBar extends React.Component {
  //deliverable wants responsive search bar

  state = {
    searchTerm: ""
  }

  searchHandler = (e) => {
    this.setState({ searchTerm: e.target.value})
    this.props.searchHandler(e.target.value)
  }

  render() {
    // console.log(this.state.searchTerm)
    return (
      <div className="search">
        <input onChange={this.searchHandler} type="text" placeholder="Search" value={this.state.searchTerm} />
      </div>
    );
  }

}

export default SearchBar;
