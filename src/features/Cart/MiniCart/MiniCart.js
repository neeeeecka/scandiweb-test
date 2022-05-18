import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
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

    const [cleanupClickHandler, safeToggle] = handleClickOutsideModal(
      this.clickRef,
      this.handleClickOutside
    );

    this.safeToggle = safeToggle;

    this.addCleanup(cleanupClickHandler);

    this.focusRef = React.createRef();
  }

  closeModal = () => {
    this.safeToggle(() => {
      this.setState({ modalVisible: false });
    });
  };

  openModal = () => {
    this.safeToggle(() => {
      this.setState({ modalVisible: true });
    });
  };

  handleClickOutside = () => {
    if (this.state.modalVisible) {
      this.closeModal();
    }
  };

  componentDidUpdate(prevProps) {
    if (!this.state.modalVisible) {
      this.focusRef.current.focus();
    }
  }

  // toggleModal = () => {
  //   this.safeToggle(() => {
  //     this.setState({
  //       modalVisible: !this.state.modalVisible,
  //       animationGoing: true
  //     });
  //     setTimeout(() => {
  //       this.setState({ animationGoing: false });
  //     }, this.state.animationTime);
  //   });
  // };

  render() {
    const { modalVisible, animationGoing, animationTime } = this.state;

    const { quantity } = this.props;

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
  quantity: quantity(state)
});

export default connect(mapStateToProps)(MiniCart);
