var React = require('react');
var SearchBar = require('./SearchBar');
var ProductTable = require('./ProductTable');

function FilterableProductTable (props){
    return <p>{props.products.name}</p>;
}

var App = React.createClass({
  render: function() {
    return (
      <div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
});

var PRODUCTS = {
  category: 'Sporting Goods',
  price: '$49.99',
  stocked: true,
  name: 'Football'
};

module.exports = App;
