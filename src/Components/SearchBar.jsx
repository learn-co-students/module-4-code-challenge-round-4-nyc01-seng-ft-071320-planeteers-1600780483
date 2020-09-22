import React from 'react';

class SearchBar extends React.Component {

   state ={
     searchValue: ""
   }

   changeHandler = (e) => {
    // console.log("im changing", e.target.value)
    e.persist();
    this.setState({searchValue: e.target.value})
    this.props.searchHandler(e.target.value)
    // changed line 13 to take in e.target.value instead of this.state.searchValue and bugs went away
   }
  
    render() {
      console.log("state in search bar", this.state)
    return (
      <div className="search">
        <input type="search" placeholder="Search Planeteers" value={this.state.searchValue} onChange={this.changeHandler}/>
      </div>
    );
  }

}

export default SearchBar;
