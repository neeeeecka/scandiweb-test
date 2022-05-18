import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Icon from '../../../assets/Icon';
import CustomComponent from '../../../core/CustomComponent';

import {
  selectCurrentModal,
  openModal,
  closeModal
} from '../../../store/modalsSlice';
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
`;

const CartStyle = {
  width: '20px',
  height: '20px',
  position: 'relative'
};

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
    animationTime: 150
  };

  constructor(props) {
    super(props);

    this.clickRef = React.createRef();

    this.focusRef = React.createRef();
  }

  closeModal = () => {
    this.props.closeModal();
  };

  openModal = () => {
    this.props.openModal('minicart');
  };

  componentDidUpdate(prevProps) {
    if (!this.state.modalVisible) {
      this.focusRef.current.focus();
    }
  }

  render() {
    const { animationGoing, animationTime } = this.state;

    const { quantity, currentModal } = this.props;

    const modalVisible = currentModal === 'minicart';

    return (
      <WrapperStyle>
        <ButtonStyle
          onClick={() => this.openModal()}
          aria-label="See minicart"
          ref={this.focusRef}
        >
          <Icon name={'cart'} style={CartStyle} />
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
  quantity: quantity(state),
  currentModal: selectCurrentModal(state)
});

const mapDispatchToProps = {
  openModal,
  closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
