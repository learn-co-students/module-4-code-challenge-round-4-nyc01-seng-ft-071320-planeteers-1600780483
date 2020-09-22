import React from 'react';

class SearchBar extends React.Component {

  state = {
    searchTerm: ""
  }

  

  render() {
    return (
      <>
      <div className="search">
      </div>
      <form>
        <input type="text" placeholder="Search" value={this.state.searchTerm}></input>
      </form>
      </>
    );
  }

}

export default SearchBar;
