import React from 'react';

class SearchBar extends React.Component {

// state={
//   searchInput: this.props.searchInput
// }



  render() {
    return (
      <div className="search">
        <form onSubmit={(e)=> e.preventDefault()}>

          <label>
            <input type="text" name="search" placeholder="Who would you like to search for?" value={this.props.searchInput} onChange={this.props.changeHandler}></input>
          </label>

          <input type="submit" value="Search"/>

        </form>
      </div>
    );
  }

}

export default SearchBar;
