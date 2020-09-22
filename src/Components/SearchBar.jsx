import React from 'react';

const SearchBar =(props)=> {

  // render() {
    // console.log(this.props.search)
    return (
      <div className="search">
        <input type='text' placeholder='by name or bio' value={props.search} onChange={props.changer}/>
      </div>
    );
  // }

}

export default SearchBar;
