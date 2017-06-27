var React = require('react');

var SearchBar = React.createClass({

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  },

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  },
  render: function() {
  return (
    <form>
      <input
      type="text"
      placeholder="Search..." value={this.props.filterText}
      onChange={this.handleFilterTextInputChange}
      />
      <p>
        <input
        type="checkbox"
        checked={this.props.inStockOnly}
        onChange={this.handleInStockInputChange}
        />
      {' '}
      Only show products in stock
      </p>
    </form>
  );
  }
});

module.exports = SearchBar;
