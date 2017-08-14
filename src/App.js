import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// define React component
class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <from>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </from>
        );
    }
}


export default FilterableProductTable;
