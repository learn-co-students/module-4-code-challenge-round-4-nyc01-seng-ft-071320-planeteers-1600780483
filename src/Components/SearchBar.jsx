import React from 'react';

class SearchBar extends React.Component {

  state = {
    searchWord: ""
  }

  changeHandler = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // submitHandler = () => {
  // // here i want to make the search bar responsive, by re-rendering the list as the user types in a value
  // // but im not sure how to implement it properly
  // // i would do the submit button but im not sure how to implement that propley either
  // this.props.searchHandler(this.state.searchWord)
  // }


  render() {
    return (
    <div className="search" /*onSubmit={this.submitHandler}*/>
        <h4>Search For A Planeteer!</h4>
        <input type="text" name="searchWord" value={this.state.searchWord} onChange={this.changeHandler}/>
        {/* <button>Submit</button> */}
      </div>
    );
  }

}

export default SearchBar;
