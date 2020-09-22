import React from "react";

class SearchBar extends React.Component {
  onChange = (e) => {
    console.log(e.target.value, "searchbar triggering");
    this.props.search(e.target.value);
  };
  render(props) {
    return (
      <div className="search">
        <form>
          <input
            placeholder="search"
            value={this.props.value}
            onChange={this.onChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
