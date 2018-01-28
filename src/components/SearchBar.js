import React, { Component } from "react";

class SearchBar extends Component{

    onHandleSearch(event){
        this.props.handleSearch(event.target.value);
    }
    render(){
        return <input className="form-control w-25 mx-auto" placeholder="Search" onChange={this.onHandleSearch.bind(this)} />;
    }
}


export default SearchBar;;