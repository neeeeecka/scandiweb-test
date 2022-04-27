import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import styled from "styled-components";
import Icon from "../../assets/icon";

const ButtonStyle = styled.button`
  display: flex;
  padding: 0 9px;
  position: relative;
`;

const CartStyle = `
  width: 20px;
  height: 20px;
  position: relative;
`;

const CartCounter = styled.span`
  position: absolute;
  top: -10px;
  left: 22px;
  background: black;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-weight: 700;
  font-family: "Roboto";
  font-size: 15px;

  & span {
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

class Cart extends React.Component {
  render() {
    return (
      <ButtonStyle>
        <Icon name={"cart"} style={CartStyle} />
        <CartCounter>
          <span>3</span>
        </CartCounter>
      </ButtonStyle>
    );
  }
}

export default Cart;
