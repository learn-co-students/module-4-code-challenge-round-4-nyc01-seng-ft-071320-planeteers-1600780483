import React from 'react';

class SearchBar extends React.Component {

  state = {
    searchValue: ''
  }

  changeHandler = (event) => {
    event.persist()
    this.setState(()=>({
      searchValue: event.target.value
    }))
    // console.log(this.state.searchValue)
    this.props.searchHandler(this.state.searchValue)
  }

  render() {
    return (
      <div className="search">
        <input type="text" onChange={this.changeHandler} placeholder='Search Planeteers' value={this.state.searchValue} />
      </div>
    );
  }

}

export default SearchBar;
