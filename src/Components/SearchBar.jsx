import React from "react";

function SearchBar(props) {
	return (
		<form className="search">
			<input
				placeholder="Search Planeteers"
				value={props.searchValue}
				onChange={props.searchHandler}
			/>
		</form>
	);
}

export default SearchBar;
