import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <form>
          <input type="text" value={this.props.value} onChange={this.props.searchHandler} placeholder="Who would you like to search for?" /> 
        </form>
      </div>
    );
  }

}

export default SearchBar;
