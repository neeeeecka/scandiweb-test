import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import styled from "styled-components";
import Icon from "../../../assets/icon";
import CustomComponent from "../../../core/CustomComponent";
import Modal from "../../../core/Modal/Modal";
import handleClickOutsideModal from "../../../handlers/handleClickOutsideModal";
import { keyframes } from "styled-components";

const WrapperStyle = styled.div`
  position: relative;
  display: flex;
`;

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

const CartModal = styled.div`
  transition: all 0.15s ease;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 80px;

  pointer-events: ${(props) =>
    props.animationGoing || props.visible ? "auto" : "none"};

  opacity: ${(props) => (props.visible ? 1 : 0)};

  &:before {
    transition: all 0.15s ease;
    content: "";
    display: block;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const CartModalContent = styled.div`
  background: white;
  padding: 15px;
  position: absolute;
  top: 0;
  left: calc(100% - 380px);
  width: 325px;
`;

class Cart extends CustomComponent {
  state = {
    animationGoing: false,
  };

  constructor(props) {
    super(props);

    this.clickRef = React.createRef();

    const [cleanupClickHandler, safeToggle] = handleClickOutsideModal(
      this.clickRef,
      this.handleClickOutside
    );

    this.safeToggle = safeToggle;

    this.addCleanup(cleanupClickHandler);
  }

  handleClickOutside = () => {
    if (this.state.modalVisible) {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.safeToggle(() => {
      console.log("toggleModal");

      this.setState({
        modalVisible: !this.state.modalVisible,
        animationGoing: true,
      });
      setTimeout(() => {
        this.setState({ animationGoing: false });
      }, 150);
    });
  };

  render() {
    const { modalVisible, animationGoing } = this.state;

    return (
      <WrapperStyle>
        <ButtonStyle onClick={() => this.toggleModal()}>
          <Icon name={"cart"} style={CartStyle} />
          <CartCounter>
            <span>3</span>
          </CartCounter>
        </ButtonStyle>
        <Modal>
          <CartModal visible={modalVisible} animationGoing={animationGoing}>
            <CartModalContent ref={this.clickRef}>
              <h1>My bag</h1>
              <span>3 items lorem10 </span>
            </CartModalContent>
          </CartModal>
        </Modal>
      </WrapperStyle>
    );
  }
}

export default Cart;
