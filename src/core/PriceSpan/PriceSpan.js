import React from 'react';
import { connect } from 'react-redux';

class PriceSpan extends React.Component {
  render() {
    const { prices, selectedCurrency } = this.props;

    const price = prices[selectedCurrency].amount;
    const currencySymbol = prices[selectedCurrency].currency.symbol;

    return (
      <span>
        {currencySymbol}
        {price}
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCurrency: 0
});

export default connect(mapStateToProps)(PriceSpan);
