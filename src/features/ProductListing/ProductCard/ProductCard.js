import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../../assets/Icon';
import PriceSpan from '../../../core/PriceSpan';
import CartItem from '../../../models/CartItem';
import { updateProduct } from '../../Cart/cartSlice';
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

  ${(props) => (props.inStock ? '' : 'color: #8D8F9A; cursor: not-allowed;')}
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

  i {
    transform: scale(0.5);
    filter: brightness(0) invert(1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
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

const OutOfStockOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutOfStockSpan = styled.span`
  color: #8d8f9a;
  text-transform: uppercase;
  font-size: 24px;
`;

const CardImageWrapper = styled.div`
  position: relative;
`;

class ProductCard extends React.Component {
  addToCart = () => {
    const { updateProduct, product } = this.props;

    const cartItem = new CartItem(product);
    const newCartItem = CartItem.fromSerialized(cartItem);
    newCartItem.newUID();

    updateProduct(newCartItem.serialized);
  };

  render() {
    const { product } = this.props;

    const { id, name, brand, prices, gallery, inStock } = product;

    const image = gallery[0];

    return (
      <ProductCardStyle inStock={inStock}>
        <Link to={`/pdp?product=${id}`}>
          <CardImageWrapper>
            <CardImage src={image} alt="Product preview" />
            {!inStock && (
              <OutOfStockOverlay>
                <OutOfStockSpan>Out of stock</OutOfStockSpan>
              </OutOfStockOverlay>
            )}
          </CardImageWrapper>
        </Link>

        <ButtonWrapper>
          {inStock ? (
            <PopupButton aria-label="Add item to cart" onClick={this.addToCart}>
              <Icon name="cart" />
            </PopupButton>
          ) : null}
        </ButtonWrapper>
        <CardTitle>{`${brand} ${name}`}</CardTitle>
        <CardPrice>
          <PriceSpan prices={prices} />
        </CardPrice>
      </ProductCardStyle>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(state, ownProps.id)
});

const mapDispatchToProps = {
  updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
