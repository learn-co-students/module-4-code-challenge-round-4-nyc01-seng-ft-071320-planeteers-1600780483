import React from 'react';

class SearchBar extends React.Component {

  state = {
    search: '',
    checkbox: false
  }

  searchHandler = (e) => {
    e.persist()
    console.log("In the searchBar searchHandler: ", e.target.value)
    this.setState(() => ({ search: e.target.value }))
    this.renderSearch()
  }
  renderSearch = () => {
    this.props.searchHandler(this.state.search)
  }

  onClick = (e) => {
    e.persist()
    console.log("We are clicking on it.")
    this.setState(() => ({ checkbox: !this.state.checkbox}))
    this.renderOnclick()
  }

  renderOnclick = () => {
    this.props.sort(this.state.checkbox)
  }

  render() {
    console.log("Value of checkbox", this.state.checkbox)
    return (
      <div className="search">
        <input name={this.state.search} onChange={this.searchHandler}/>
        <input name="Sort" type="checkbox" value={this.state.checkbox} onClick={this.onClick} sort={this.props.sort}/>
      </div>
    );
  }

}

export default SearchBar;
