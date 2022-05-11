import React from 'react';
import { connect } from 'react-redux';
import { selectSelectedCurrency } from '../../features/Categories/CurrencyPicker/currencySlice';

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
  selectedCurrency: selectSelectedCurrency(state)
});

export default connect(mapStateToProps)(PriceSpan);
