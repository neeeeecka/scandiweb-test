import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Icon from '../../../assets/Icon';
import CustomComponent from '../../../core/CustomComponent';

import handleClickOutsideModal from '../../../handlers/handleClickOutsideModal';

import { quantity } from '../cartSlice';
import CartModal from './CartModal';

const WrapperStyle = styled.div`
  position: relative;
  display: flex;
`;

const ButtonStyle = styled.button`
  display: flex;
  padding: 0 9px;
  position: relative;

  i {
    width: 20px;
    height: 20px;
    position: relative;
  }
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
  font-family: 'Roboto';
  font-size: 15px;

  & span {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

class MiniCart extends CustomComponent {
  state = {
    animationGoing: false,
    animationTime: 150,
    modalVisible: false
  };

  constructor(props) {
    super(props);

    this.clickRef = React.createRef();

    this.focusRef = React.createRef();

    const [cleanup, safeToggle] = handleClickOutsideModal(
      this.clickRef,
      this.closeModal
    );

    this.safeToggle = safeToggle;
    this.addCleanup(cleanup);
  }

  closeModal = () => {
    if (this.state.modalVisible) {
      this.safeToggle(() => this.setState({ modalVisible: false }));
    }
  };

  openModal = () => {
    this.safeToggle(() => this.setState({ modalVisible: true }));
  };

  toggleModal = () => {
    this.safeToggle(() =>
      this.setState({ modalVisible: !this.state.modalVisible })
    );
  };

  componentDidUpdate(prevProps) {
    if (!this.state.modalVisible) {
      this.focusRef.current.focus();
    }
  }

  render() {
    const { animationGoing, animationTime, modalVisible } = this.state;

    const { quantity } = this.props;

    return (
      <WrapperStyle>
        <ButtonStyle
          onClick={() => this.openModal()}
          aria-label="See minicart"
          ref={this.focusRef}
        >
          <Icon name={'cart'} />
          <CartCounter>
            <span>{quantity}</span>
          </CartCounter>
        </ButtonStyle>

        <CartModal
          closeModal={this.closeModal}
          modalVisible={modalVisible}
          animationGoing={animationGoing}
          animationTime={animationTime / 1000}
          clickRef={this.clickRef}
        />
      </WrapperStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  quantity: quantity(state)
});

export default connect(mapStateToProps)(MiniCart);
