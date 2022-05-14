import React from 'react';
import { connect } from 'react-redux';
import { selectProductById } from '../../../features/ProductListing/productListingSlice';
import CartItem from '../../../models/CartItem';

import { updateProduct } from '../../../features/Cart/cartSlice';

class ItemController extends React.Component {
  updateAttributtes = (attribute, value) => {
    const { cartItem, updateProduct } = this.props;

    const newCartItem = CartItem.fromSerialized(cartItem);
    newCartItem.selectAttribute(attribute.id, value);

    updateProduct(newCartItem.serialized);
  };

  updateQuantity = (newCount) => {
    const { cartItem, updateProduct } = this.props;

    const newCartItem = CartItem.fromSerialized(cartItem);
    newCartItem.setQuantity(newCount);

    updateProduct(newCartItem.serialized);
  };

  render() {
    const { children, product } = this.props;

    return children({
      product: product,
      updateAttributtes: this.updateAttributtes,
      updateQuantity: this.updateQuantity
    });
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(state, ownProps.id)
});

const mapDispatchToProps = {
  updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemController);
