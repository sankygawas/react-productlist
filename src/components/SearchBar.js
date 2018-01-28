import React, { Component } from "react";

class SearchBar extends Component {
  onHandleSearch(event) {
    this.props.handleSearch(event.target.value);
  }

  onHandleStockCheck(event) {
    this.props.handleCheck(event.target.checked);
  }
  render() {
    return (
      <form>
        <input
          className="form-control w-25 mx-auto"
          placeholder="Search"
          onChange={this.onHandleSearch.bind(this)}
        />
        <div className="form-check text-left pl-0 w-25 mx-auto mt-3">
          <input
            type="checkbox"
            className="mr-2"
            id="stocked"
            onChange={this.onHandleStockCheck.bind(this)}
          />
          <label className="form-check-label" htmlFor="stocked">
            Only show stocked items
          </label>
        </div>
      </form>
    );
  }
}


export default SearchBar;;