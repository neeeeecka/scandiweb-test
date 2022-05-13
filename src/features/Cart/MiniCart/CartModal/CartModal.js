import React from 'react';
import styled from 'styled-components';
import Modal from '../../../../core/Modal';
import { ButtonFill, ButtonOutline } from '../../../../styles/global.css';
import CompactItem from '../../../../core/ProductTweaker/_Layouts/CompactItem';
import { Link } from 'react-router-dom';

import withRouter from '../../../../HOCs/withRouter';
import { connect } from 'react-redux';
import { quantity, selectAllCartItems, total } from '../../cartSlice';
import { selectCurrencySymbolAndLabel } from '../../../CurrencyPicker/currencySlice';

const CartModalStyle = styled.div`
  transition: all ${(props) => props.animationTime}s ease;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 80px;

  pointer-events: ${(props) =>
    props.animationGoing || props.visible ? 'auto' : 'none'};

  opacity: ${(props) => (props.visible ? 1 : 0)};

  &:before {
    transition: all ${(props) => props.animationTime}s ease;
    content: '';
    display: block;
    left: 0;
    width: 100%;
    height: 100%;
    background: #39374838;
  }
`;

const CartModalContent = styled.div`
  transition: all 0.25s ease;
  background: white;

  padding: 15px;
  position: absolute;
  top: 0;
  width: 335px;
  font-size: 16px;
  color: #1d1f22;

  ${(props) =>
    props.visible
      ? 'left: calc(100% - 390px);'
      : 'left: 100%; visibility: hidden;'}
`;

const Paragraph = styled.p`
  font-weight: 500;
  margin-bottom: 0;
  & b {
    font-weight: 700;
  }
`;

const ItemContainer = styled.div`
  margin: 15px 0;
  max-height: 400px;
  overflow: auto;
`;

const FooterParagraph = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-weight: 600;

  b {
    font-weight: 700;
  }
`;

const ButtonsWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const ButtonFlex1 = (ButtonStyle) => {
  return styled(ButtonStyle)`
    flex: 1;
    display: flex;
    text-decoration: none;
  `;
};

const ViewBagButton = ButtonFlex1(ButtonOutline);
const CheckoutButton = ButtonFlex1(ButtonFill);

class CartModal extends React.Component {
  constructor(props) {
    super(props);
    this.hiddenFocusRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { modalVisible, clickRef } = this.props;
    if (modalVisible && !prevProps.modalVisible) {
      clickRef.current.focus();
    }
  }

  goToCartPage = (e) => {
    e.preventDefault();
    this.props.navigate('/cart');
  };

  render() {
    const {
      modalVisible,
      animationGoing,
      animationTime,
      clickRef,
      cartItems,
      currencySymbolAndLabel,
      total,
      quantity
    } = this.props;

    const { symbol } = currencySymbolAndLabel;

    return (
      <Modal>
        <CartModalStyle
          visible={modalVisible}
          animationGoing={animationGoing}
          animationTime={animationTime}
        >
          <CartModalContent
            key="modal"
            ref={clickRef}
            visible={modalVisible}
            id="cartModal"
            tabIndex={0}
          >
            <Paragraph>
              <b>My bag</b>
              <span>, {quantity} items</span>
            </Paragraph>
            <ItemContainer>
              {cartItems.map((cartItem) => (
                <CompactItem
                  cartItem={cartItem}
                  id={cartItem.id}
                  key={cartItem.uid}
                />
              ))}
            </ItemContainer>
            <FooterParagraph>
              <span>Total:</span>
              <b>
                {symbol}
                {total}
              </b>
            </FooterParagraph>
            <ButtonsWrapper>
              <ViewBagButton href="/cart" onClick={this.goToCartPage} as="a">
                View bag
              </ViewBagButton>
              <CheckoutButton href="/cart" onClick={this.goToCartPage} as="a">
                Checkout
              </CheckoutButton>
            </ButtonsWrapper>
          </CartModalContent>
        </CartModalStyle>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectAllCartItems(state),
  total: total(state),
  quantity: quantity(state),
  currencySymbolAndLabel: selectCurrencySymbolAndLabel(state)
});

export default connect(mapStateToProps)(withRouter(CartModal));
