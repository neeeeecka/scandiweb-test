import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import styled from "styled-components";
import Icon from "../../assets/icon";

const ButtonStyle = styled.button`
  display: flex;
  padding: 0 9px;
`;

const CartStyle = `
  width: 20px;
  height: 20px;
  position: relative;
`;

class Cart extends React.Component {
  render() {
    return (
      <ButtonStyle>
        <Icon name={"cart"} style={CartStyle} />
      </ButtonStyle>
    );
  }
}

export default Cart;
