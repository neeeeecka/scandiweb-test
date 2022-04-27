import React from "react";
import styled from "styled-components";
import Icon from "../../../assets/icon";

const PopupButton = styled.button`
  transition: all 0.25s ease;
  cursor: pointer;
  background: #5ece7b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  transform: translateY(0) scale(0);
`;

const ProductCardStyle = styled.div`
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 18px;
  margin: 30px max(5px, 1vw);
  background: white;

  &:hover {
    transition: all 0.25s ease;
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  }

  &:hover ${PopupButton} {
    transform: translateY(-50%) scale(1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-weight: 300;
  margin-bottom: 10px;
`;

const CardPrice = styled.span`
  font-weight: 500;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const iconStyle = `
  transform: scale(0.5);
  filter: brightness(0) invert(1);
`;

class ProductCard extends React.Component {
  render() {
    return (
      <ProductCardStyle>
        <CardImage src="https://via.placeholder.com/300x300" />
        <ButtonWrapper>
          <PopupButton>
            <Icon name="cart" style={iconStyle} />
          </PopupButton>
        </ButtonWrapper>
        <CardTitle>Apollo Running Short</CardTitle>
        <CardPrice>$50.00</CardPrice>
      </ProductCardStyle>
    );
  }
}

export default ProductCard;
