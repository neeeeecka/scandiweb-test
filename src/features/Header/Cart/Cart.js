import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import styled from "styled-components";
import Icon from "../../../assets/icon";
import CustomComponent from "../../../core/CustomComponent";
import handleClickOutsideModal from "../../../handlers/handleClickOutsideModal";

const WrapperStyle = styled.div`
  position: relative;
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

const CartContent = styled.div`
  background: white;
  padding: 15px;
  position: relative;
`;

const CartModal = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  display: ${(props) => (props.visible ? "block" : "none")};

  &:before {
    transition: all 0.15s ease;
    content: "";
    display: block;
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

class Cart extends CustomComponent {
  state = {};

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
    this.safeToggle(() => {
      this.setState({ modalVisible: false });
    });
  };

  toggleModal = () => {
    this.safeToggle(() => {
      this.setState({ modalVisible: !this.state.modalVisible });
    });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <WrapperStyle>
        <ButtonStyle onClick={() => this.toggleModal()}>
          <Icon name={"cart"} style={CartStyle} />
          <CartCounter>
            <span>3</span>
          </CartCounter>
        </ButtonStyle>
        <CartModal visible={modalVisible}>
          <CartContent ref={this.clickRef}>
            <h1>My bag</h1>
            <span>3 items lorem10 </span>
          </CartContent>
        </CartModal>
      </WrapperStyle>
    );
  }
}

export default Cart;
