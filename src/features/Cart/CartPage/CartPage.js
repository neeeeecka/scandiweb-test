import React from 'react';
import styled from 'styled-components';
import BigItem from '../../../core/ProductTweaker/_Layouts/Big/BigItem';
import { ButtonFill } from '../../../styles/global.css';

import { updateProduct, selectAllCartItems } from '../cartSlice';
import { connect } from 'react-redux';

const CartPageSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  padding-top: 80px;
  padding-bottom: 50px;
  margin: 0;
`;

const CartPageItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartOrderWrapper = styled.div`
  padding-top: 32px;
`;

const CartOrderLabelWrapper = styled.div`
  font-size: 24px;
  padding-bottom: 10px;
  span {
    font-weight: 500;
    margin-right: 5px;
  }
  b {
    font-weight: 700;
  }
  &:last-of-type {
    padding-top: 15px;
    span {
      margin-right: 15px;
    }
  }
`;

const OrderButton = styled(ButtonFill)`
  width: 279px;
  margin-top: 10px;
`;

class CartPage extends React.Component {
  render() {
    const { cartItems } = this.props;

    return (
      <CartPageSection>
        <Title>Cart</Title>
        <CartPageItems>
          {cartItems.map((cartItem) => (
            <BigItem
              cartItem={cartItem}
              id={cartItem.id}
              key={cartItem.attributeHash}
            />
          ))}
        </CartPageItems>
        <CartOrderWrapper>
          <CartOrderLabelWrapper>
            <span>Tax:</span>
            <b>$15.00</b>
          </CartOrderLabelWrapper>
          <CartOrderLabelWrapper>
            <span>Qty:</span>
            <b>3</b>
          </CartOrderLabelWrapper>
          <CartOrderLabelWrapper>
            <span>Total:</span>
            <b>$200.00</b>
          </CartOrderLabelWrapper>
          <OrderButton>ORDER</OrderButton>
        </CartOrderWrapper>
      </CartPageSection>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectAllCartItems(state)
});

const mapDispatchToProps = {
  updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
