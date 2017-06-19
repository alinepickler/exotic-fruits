var React = require('react');

var ProductRow = React.createClass ({
  render: function () {
    return (
      <tr>
        <td>product</td>
        <td>price</td>
      </tr>
    );
  }
});

module.exports = ProductRow;
