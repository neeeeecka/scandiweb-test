import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../../assets/Icon';
import { selectProductById } from '../productListingSlice';

const ProductCardStyle = styled.div`
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 18px;
  margin: 30px 0;
  background: white;
  position: relative;

  &:hover {
    transition: all 0.25s ease;
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  }
`;

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

  ${ProductCardStyle}:hover &, &:focus {
    transform: translateY(-50%) scale(1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const CardTitle = styled.h1`
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  padding-bottom: 10px;
`;

const CardPrice = styled.span`
  font-weight: 500;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
  height: 25px;
`;

const iconStyle = `
  transform: scale(0.5);
  filter: brightness(0) invert(1);
`;

const CardLink = styled.a`
  cursor: pointer;
`;

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;

    const selectedCurrency = 0;

    const { id, name, prices, gallery } = product;

    const price = prices[selectedCurrency].amount;
    const currencySymbol = prices[selectedCurrency].currency.symbol;

    const image = gallery[0];

    return (
      <ProductCardStyle>
        <Link to="/pdp">
          <CardImage src={image} alt="Product preview" />
        </Link>
        <ButtonWrapper>
          <PopupButton aria-label="Add item to cart">
            <Icon name="cart" style={iconStyle} />
          </PopupButton>
        </ButtonWrapper>
        <CardTitle>{name}</CardTitle>
        <CardPrice>
          {currencySymbol}
          {price}
        </CardPrice>
      </ProductCardStyle>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(state, ownProps.id)
});

export default connect(mapStateToProps)(ProductCard);
