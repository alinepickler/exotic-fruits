var React = require('react');
var ProductRow = require('./ProductRow');

var ProductTable = React.createClass ({
  render: function () {
    return (
      <table>
        <thead>
          <ProductRow />
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>blabla</tbody>
      </table>
    );
  }
});

module.exports = ProductTable;
