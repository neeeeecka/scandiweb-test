import React from 'react';
import { connect } from 'react-redux';
import { selectSelectedCurrency } from '../../features/CurrencyPicker/currencySlice';

class PriceSpan extends React.Component {
  render() {
    const { prices, singlePrice, selectedCurrency } = this.props;

    const price = prices ? prices[selectedCurrency].amount : singlePrice;
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
