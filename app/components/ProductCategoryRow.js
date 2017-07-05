var React = require('react');

class ProductCategoryRow extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
}

module.exports = ProductCategoryRow;
