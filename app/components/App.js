var React = require('react');
var SearchBar = require('./SearchBar');

var FilterableProductTable = React.createClass ({
  render: function() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
});

module.exports = FilterableProductTable;
