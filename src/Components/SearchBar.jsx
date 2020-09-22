import React from 'react';

function SearchBar(props) {
  const { search, searchValue, sort } = props;
  return (
    <div className='search'>
      <label>Search</label>
      <input
        className='searchTerm'
        type='text'
        placeholder='Who would you like to search for?'
        value={searchValue}
        onChange={search}
      />
      <label>Sort</label>
      <input type='checkbox' onClick={sort} />
    </div>
  );
}

export default SearchBar;
