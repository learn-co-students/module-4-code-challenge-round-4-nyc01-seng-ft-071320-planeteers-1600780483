import React from 'react';

class SearchBar extends React.Component {

  state = {
    searchTerm: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(() => ({
      searchTerm: e.target.value
    }))
    this.props.searchHandler(this.state)
  }

  render() {
    return (
      <div className="search">
        <form  >
          <input type="text" value={this.term} onChange={this.changeHandler} />
        </form>
      </div>
    );
  }

}

export default SearchBar;
