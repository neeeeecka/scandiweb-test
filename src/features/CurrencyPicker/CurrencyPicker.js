import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Icon from '../../assets/Icon';
import handleClickOutsideModal from '../../handlers/handleClickOutsideModal';
import CustomComponent from '../../core/CustomComponent';
import {
  selectCurrencies,
  selectSelectedCurrency,
  selectCurrency
} from './currencySlice';
import {
  selectCurrentModal,
  openModal,
  closeModal
} from '../../store/modalsSlice';

const ButtonWrapperStyle = styled.div`
  cursor: pointer;
  display: flex;
  font-weight: 500;
  font-size: 18px;
  position: relative;
`;

const ButtonStyle = styled.button`
  display: flex;
  font-size: inherit;
  font-weight: inherit;
  padding: 0 9px;
`;

// const ArrowDown = `
//   width: 8px;
//   height: 8px;
//   position: relative;
//   top: 9px;
//   margin-left: 8px;
// `;

const ArrowDownIcon = {
  width: '8px',
  height: '8px',
  position: 'relative',
  top: '9px',
  marginLeft: '8px'
};

const CurrencyDropdownStyle = styled.div`
  flex-direction: column;
  position: absolute;
  top: calc(100% + 15px);
  left: 0;
  font-weight: inherit;
  font-size: inherit;
  background: white;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  ${(props) => (props.visible ? 'display: flex;' : 'display: none;')}
`;

const CurrencyDropdownButton = styled.button`
  transition: all 0.25s ease;
  font-weight: inherit;
  font-size: inherit;
  padding-left: 20px;
  padding-right: 35px;
  padding-block: 15px;
  span:first-child {
    margin-right: 5px;
  }
  &:hover {
    transition: all 0.25s ease;
    background: #eeeeee;
  }
  ${(props) => (props.selected ? 'background: #eeeeee;' : '')}
`;

class CurrencyPicker extends CustomComponent {
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
    if (this.state.menuVisible) {
      this.props.closeModal();
    }
  };

  toggleMenu = (e) => {
    const { currentModal, closeModal, openModal } = this.props;
    const menuVisible = currentModal === 'currencypicker';

    this.safeToggle(() => {
      if (menuVisible) {
        closeModal();
      } else {
        openModal('currencypicker');
      }
    });
  };

  chooseCurrency = (currencyLabel) => {
    const { currencies, selectCurrency } = this.props;

    const currencyIndex = currencies.findIndex(
      (currency) => currency.label === currencyLabel
    );

    selectCurrency(currencyIndex);

    this.toggleMenu();
  };

  render() {
    const { currencies, selectedCurrency, currentModal } = this.props;

    const menuVisible = currentModal === 'currencypicker';

    return (
      <ButtonWrapperStyle>
        <ButtonStyle
          onClick={(e) => this.toggleMenu(e)}
          aria-label="Choose currency"
        >
          <span>$</span>
          <Icon
            name={menuVisible ? 'arrow-up' : 'arrow-down'}
            style={ArrowDownIcon}
          />
        </ButtonStyle>
        <CurrencyDropdownStyle visible={menuVisible} ref={this.clickRef}>
          {currencies.map(({ label, symbol }) => (
            <CurrencyDropdownButton
              selected={currencies[selectedCurrency].label === label}
              key={label}
              onClick={() => this.chooseCurrency(label)}
            >
              <span>{symbol}</span>
              <span>{label}</span>
            </CurrencyDropdownButton>
          ))}
        </CurrencyDropdownStyle>
      </ButtonWrapperStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: selectCurrencies(state),
  selectedCurrency: selectSelectedCurrency(state),
  currentModal: selectCurrentModal(state)
});

const mapDispatchToProps = {
  selectCurrency,
  openModal,
  closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPicker);
