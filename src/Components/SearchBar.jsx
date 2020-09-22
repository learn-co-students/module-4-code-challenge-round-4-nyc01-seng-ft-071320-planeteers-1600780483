import React from 'react';

class SearchBar extends React.Component {

  state = {
    search: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(() => ({ [e.target.name]: e.target.value }), () => this.props.searchHandler(this.state.search))
  }

  render() {
    return (
      <div className="search">
        <h3>Search</h3>
        <input type="text" name="search" value={this.state.search} onChange={this.changeHandler} />
      </div>
    );
  }

}

export default SearchBar;
