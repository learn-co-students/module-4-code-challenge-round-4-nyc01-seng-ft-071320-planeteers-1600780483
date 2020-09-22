import React from 'react';

class SearchBar extends React.Component {

  changeHandler = (e) => {
    return this.props.searchTerm(e.target.value)
  }

  render() {
    return (
      <div className="search">
        <label>Search Here</label>
        <form action="">
          <input type="text" name="name" onChange={this.changeHandler}/>
        </form>
      </div>
    );
  }

}

export default SearchBar;
