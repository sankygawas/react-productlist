import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsTable from "./components/ProductsTable";
import SearchBar from "./components/SearchBar";

class FilterableProductTable extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <SearchBar />
        </header>
        <ProductsTable products={this.props.products} />
      </div>;
  }
}

export default FilterableProductTable;
