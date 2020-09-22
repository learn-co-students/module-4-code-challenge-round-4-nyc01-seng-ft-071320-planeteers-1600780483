import React from 'react';

class SearchBar extends React.Component {

   state ={
     searchValue: ""
   }

   changeHandler = (e) => {
    e.persist();
    this.setState({searchValue: e.target.value})
    this.props.searchHandler(e.target.value)
    // changed line 13 to take in e.target.value instead of this.state.searchValue and bugs went away
   }
  
    render() {
    return (
      <div className="search">
        <input type="search" placeholder="Search Planeteers" value={this.state.searchValue} onChange={this.changeHandler}/>
      </div>
    );
  }

}

export default SearchBar;
