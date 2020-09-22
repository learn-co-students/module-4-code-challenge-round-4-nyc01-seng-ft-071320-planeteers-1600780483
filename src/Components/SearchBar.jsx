import React from 'react';

class SearchBar extends React.Component {

  render() {
    console.log("inside searchBar ", this.props )
    return (
      <div className="search">
        <input value={this.props.searchValue} onChange={ (e) => {this.props.changeHandler(e)}}/>
      </div>
    );
  }

}

export default SearchBar;

