import React from "react";
import styled from "styled-components";
import BigItem from "../../core/ProductTweaker/Layouts/Big/BigItem";

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

class CartPage extends React.Component {
  render() {
    return (
      <CartPageSection>
        <Title>Cart</Title>
        <CartPageItems>
          <BigItem />
          <BigItem />
        </CartPageItems>
      </CartPageSection>
    );
  }
}

export default CartPage;
