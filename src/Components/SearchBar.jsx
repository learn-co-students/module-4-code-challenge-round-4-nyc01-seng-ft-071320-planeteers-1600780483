import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input onChange={this.props.updateSearchTerm} type='text' name='search' value={this.props.value} placeholder="search for planeteer" />
      </div>
    );
  }

}

// onChange, update the state of app
//app state is passed down to use as search value
// app state is used to filter array sent to container

export default SearchBar;
