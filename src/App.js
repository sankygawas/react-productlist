import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsTable from "./components/ProductsTable";
import SearchBar from "./components/SearchBar";

class FilterableProductTable extends Component {
  constructor(props){
    super();
    this.state = { 
      updatedList:props.products 
    };
  }
  onHandleSearch = (searchValue)=>{
    let filteredList = this.props.products.filter(item => {
      return item.name
          .toLowerCase()
          .search(searchValue.toLowerCase()) !== -1;
    });
    this.setState({ updatedList: filteredList});
  }

  onHandleStockCheck = (checked)=>{
    let filteredList = this.props.products;
    if(checked){
      filteredList = this.state.updatedList.filter(item => {
        return item.stocked === checked;
      });
      
    }
   
    this.setState({ updatedList: filteredList });
  }

  render() {

    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Products List</h1>
          <SearchBar handleSearch={this.onHandleSearch} handleCheck={this.onHandleStockCheck} />
        </header>
        <ProductsTable products={this.state.updatedList} />
      </div>;
  }
}

export default FilterableProductTable;
