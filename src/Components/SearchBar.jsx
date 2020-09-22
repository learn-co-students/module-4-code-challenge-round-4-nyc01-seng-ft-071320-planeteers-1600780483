import React from 'react';

class SearchBar extends React.Component {

  state = {
    name: "",
    checked: false
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value}, this.props.searchHandler(event.target.value))
  }

  checkboxHandler = (event) => {
    this.setState({
      checked: !this.state.checked}, this.props.ageSort(event.target.checked))
  }
  
  render() {
    return (
      <div className="search">
        <input onChange ={this.changeHandler} name="name" value={this.state.name} />
        <input onChange = {this.checkboxHandler} type="checkbox" checked={this.state.checked}/>
      </div>
    );
  }

}

export default SearchBar;
