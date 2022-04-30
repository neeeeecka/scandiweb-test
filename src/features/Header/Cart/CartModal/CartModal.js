import React from "react";
import styled from "styled-components";
import Modal from "../../../../core/Modal";
import { ButtonFill, ButtonOutline } from "../../../../styles/global.css";

const CartModalStyle = styled.div`
  transition: all ${(props) => props.animationTime}s ease;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 80px;

  pointer-events: ${(props) =>
    props.animationGoing || props.visible ? "auto" : "none"};

  opacity: ${(props) => (props.visible ? 1 : 0)};

  &:before {
    transition: all ${(props) => props.animationTime}s ease;
    content: "";
    display: block;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const CartModalContent = styled.div`
  transition: all 0.25s ease;
  background: white;
  padding: 15px;
  position: absolute;
  top: 0;
  width: 350px;
  font-size: 16px;
  color: #1d1f22;

  left: ${(props) => (props.visible ? "calc(100% - 380px)" : "100%")};
`;

const Paragraph = styled.p`
  font-weight: 500;
  & b {
    font-weight: 700;
  }
`;

const ItemContainer = styled.div`
  max-height: 600px;
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
  `;
};

const ViewBagButton = ButtonFlex1(ButtonOutline);
const CheckoutButton = ButtonFlex1(ButtonFill);

class CartModal extends React.Component {
  render() {
    const { modalVisible, animationGoing, animationTime, clickRef } =
      this.props;

    return (
      <Modal>
        <CartModalStyle
          visible={modalVisible}
          animationGoing={animationGoing}
          animationTime={animationTime}
        >
          <CartModalContent
            ref={clickRef}
            visible={modalVisible}
            id="cartModal"
          >
            <Paragraph>
              <b>My bag</b>
              <span>, 3 items</span>
            </Paragraph>
            <ItemContainer></ItemContainer>
            <FooterParagraph>
              <span>Total:</span>
              <b>$200.00</b>
            </FooterParagraph>
            <ButtonsWrapper>
              <ViewBagButton>View bag</ViewBagButton>
              <CheckoutButton>Checkout</CheckoutButton>
            </ButtonsWrapper>
          </CartModalContent>
        </CartModalStyle>
      </Modal>
    );
  }
}
export default CartModal;
