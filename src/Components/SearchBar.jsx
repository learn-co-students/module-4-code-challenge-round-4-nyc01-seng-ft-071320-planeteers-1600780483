import React from 'react';

class SearchBar extends React.Component {

   state ={
     searchValue: ""
   }

   changeHandler = (e) => {
    // console.log("im changing", e.target.value)
    e.persist();
    this.setState({searchValue: e.target.value})
    this.props.searchHandler(this.state.searchValue)
   }
  
    render() {
      // console.log("state in search bar", this.state)
    return (
      <div className="search">
        <input type="search" placeholder="Search Planeteers" value={this.state.searchValue} onChange={this.changeHandler}/>
      </div>
    );
  }

}

export default SearchBar;
