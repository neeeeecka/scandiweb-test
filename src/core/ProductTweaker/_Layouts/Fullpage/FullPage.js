import React from 'react';
import styled from 'styled-components';
import { ButtonFill } from '../../../../styles/global.css';
import PreviewBig from '../../PreviewBig';

import AttributeSet from '../../AttributeSet/';

import {
  FullPageItemWrapper,
  ItemHeading,
  PickerLabel,
  PickerWrapper
} from '../../productTweaker.css';

import { connect } from 'react-redux';
import {
  selectProductById,
  fetchProductAdditionals
} from '../../../../features/ProductListing/productListingSlice';

import PriceSpan from '../../../PriceSpan';
import CartItem from '../../../../models/CartItem';

const ItemMenus = styled.div`
  width: 292px;
`;

const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 10px;
`;

const AddToCartButton = styled(ButtonFill)`
  width: 100%;
`;

const ItemDescription = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  color: #1d1f22;
  line-height: 26px;
`;

class FullPage extends React.Component {
  state = {
    cartItem: new CartItem(),
    selectedAttributes: {}
  };

  componentDidMount() {
    const { fetchProductAdditionals, id } = this.props;
    fetchProductAdditionals(id);
  }

  componentDidUpdate(prevProps) {
    const { product } = this.props;
    if (product && product !== prevProps.product) {
      const cartItem = new CartItem(product);
      this.setState({
        cartItem
      });
    }
  }

  addToCart = () => {
    const { product } = this.props;
    const { selectedAttributes } = this.state;
    const cartItem = new CartItem(product, selectedAttributes, 1);
  };

  render() {
    const { product } = this.props;

    if (product) {
      const { name, brand, prices, gallery, description, attributes } = product;

      return (
        <FullPageItemWrapper>
          {gallery && <PreviewBig previews={gallery} />}
          <ItemMenus>
            <ItemHeading>
              <h1>{brand}</h1>
              <h2>{name}</h2>
            </ItemHeading>
            {attributes && (
              <AttributeSet
                attributes={attributes}
                selectedAttributes={this.state.cartItem.selectedAttributes}
                onChange={(attribute, value) => {
                  const newCartItem = this.state.cartItem.selectAttribute(
                    attribute.id,
                    value
                  );
                  this.setState({
                    cartItem: newCartItem
                  });
                }}
              />
            )}

            <PickerWrapper>
              <PickerLabel>Price:</PickerLabel>
              <ItemPrice>{prices && <PriceSpan prices={prices} />}</ItemPrice>
            </PickerWrapper>
            <AddToCartButton onClick={this.addToCart}>
              Add to cart
            </AddToCartButton>
            <ItemDescription
              dangerouslySetInnerHTML={{
                __html: description
              }}
            ></ItemDescription>
          </ItemMenus>
        </FullPageItemWrapper>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(state, ownProps.id)
});

const mapDispatchToProps = {
  fetchProductAdditionals
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPage);
