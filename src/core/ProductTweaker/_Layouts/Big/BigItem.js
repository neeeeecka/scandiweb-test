import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  selectProductById,
  fetchProductAdditionals
} from '../../../../features/ProductListing/productListingSlice';

import { updateProduct } from '../../../../features/Cart/cartSlice';

import ColorPicker from '../../AttributeSet/ColorPicker';
import SizePicker from '../../AttributeSet/SizePicker';
import CountPicker from '../../CountPicker';

import PreviewSmall from '../../PreviewSmall/';
import { BigItemWrapper, ItemHeading } from '../../productTweaker.css';
import PriceSpan from '../../../PriceSpan';
import AttributeSet from '../../AttributeSet';
import CartItem from '../../../../models/CartItem';

const ItemMenus = styled.div`
  flex: 1;
`;

const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 10px;
`;

class BigItem extends React.Component {
  componentDidMount() {
    const { fetchProductAdditionals, id } = this.props;
    fetchProductAdditionals(id);
  }

  render() {
    const { product, cartItem } = this.props;

    if (product) {
      const { name, brand, prices, gallery, description, attributes } = product;
      const { quantity, selectedAttributes } = cartItem;

      return (
        <BigItemWrapper>
          <ItemMenus>
            <ItemHeading>
              <h1>{brand}</h1>
              <h2>{name}</h2>
            </ItemHeading>
            <ItemPrice>{prices && <PriceSpan prices={prices} />}</ItemPrice>
            {attributes && (
              <AttributeSet
                attributes={attributes}
                selectedAttributes={selectedAttributes}
                onChange={(attribute, value) => {
                  const newCartItem = CartItem.fromSerialized(cartItem);

                  newCartItem.selectAttribute(attribute.id, value);
                }}
              />
            )}
          </ItemMenus>

          <CountPicker
            layout="big"
            count={quantity}
            onChange={(newCount) => {
              console.log(newCount);
            }}
          />
          <PreviewSmall previews={gallery} />
        </BigItemWrapper>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(state, ownProps.id)
});

const mapDispatchToProps = {
  updateProduct,
  fetchProductAdditionals
};

export default connect(mapStateToProps, mapDispatchToProps)(BigItem);
