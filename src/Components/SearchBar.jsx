import React from 'react';

class SearchBar extends React.Component {

  state = {
    isSorted: false
  }

  changeHandler = (e) => {
    this.props.changeHandler(e.target.value)
  }

  sortHandler = () => {
    this.setState(prevState => ({
      isSorted: !prevState.isSorted
    }))
    this.props.sortHandler()
  }

  render() {
    console.log("log", this.state.isSorted)
    return (
      <div className="search">
        <input className="searchTerm" name="search" value={this.props.searchVal} onChange={this.changeHandler} />
        Sort<input type="radio" name="sort" onChange={this.sortHandler} checked={this.state.isSorted}/>
      </div>
    );
  }

}

export default SearchBar;
