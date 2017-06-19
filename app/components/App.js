var React = require('react');
var SearchBar = require('./SearchBar');
var ProductTable = require('./ProductTable');

var FilterableProductTable = React.createClass ({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
});

module.exports = FilterableProductTable;
