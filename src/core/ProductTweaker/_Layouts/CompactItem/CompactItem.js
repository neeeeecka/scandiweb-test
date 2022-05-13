import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectProductById } from '../../../../features/ProductListing/productListingSlice';

import CountPicker from '../../CountPicker';

import { updateProduct } from '../../../../features/Cart/cartSlice';
import PriceSpan from '../../../PriceSpan';
import AttributeSet from '../../AttributeSet';
import CartItem from '../../../../models/CartItem';

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const ItemMenus = styled.div`
  width: 125px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const ItemHeading = styled.div`
  h1,
  h2 {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
  }
  h2 {
    padding-top: 7px;
  }
`;
const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 7px;
`;

const ItemPreview = styled.div`
  display: flex;
  flex: 1;
  background: #fcfbfc;

  & img {
    width: 100%;
    object-fit: contain;
  }
`;

class CompactItem extends React.Component {
  render() {
    const { product, cartItem, updateProduct } = this.props;

    const { name, brand, prices, gallery, description, attributes } = product;
    const { quantity, selectedAttributes, attributeHash, uid } = cartItem;

    return (
      <ItemWrapper>
        <ItemMenus>
          <ItemHeading>
            <h1>{brand}</h1>
            <h2>{name}</h2>
          </ItemHeading>
          <ItemPrice>{prices && <PriceSpan prices={prices} />}</ItemPrice>
          <AttributeSet
            attributes={attributes}
            selectedAttributes={selectedAttributes}
            onChange={(attribute, value) => {
              const newCartItem = CartItem.fromSerialized(cartItem);
              newCartItem.selectAttribute(attribute.id, value);

              updateProduct(newCartItem.serialized);
            }}
          />
        </ItemMenus>
        <CountPicker
          count={quantity}
          onChange={(newCount) => {
            const newCartItem = CartItem.fromSerialized(cartItem);
            newCartItem.setQuantity(newCount);

            updateProduct(newCartItem.serialized);
          }}
        />
        <ItemPreview>
          <img src={gallery[0]} alt="Aplllo Running Short" />
        </ItemPreview>
      </ItemWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(state, ownProps.id)
});

const mapDispatchToProps = {
  updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(CompactItem);
