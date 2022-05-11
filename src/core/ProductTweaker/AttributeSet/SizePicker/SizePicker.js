import React from 'react';
import styled from 'styled-components';
import makeUniqueId from '../../../../utils/uniqueId';
import curryDashStr from '../../../../utils/curryDashStr';

import {
  PickerLabel,
  PickerWrapper,
  BigItemWrapper
} from '../../productTweaker.css';

const SizeWrapper = styled(PickerWrapper)`
  input {
    &:focus + label {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
  }
`;

// const SizeLabel = styled(PickerLabel)``;

const ItemsSizeButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 10px;
  position: relative;
  margin-left: 3px;

  ${BigItemWrapper} & {
    margin-left: 0;
  }
`;

const SizeButton = styled.label`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background: #a6a6a633;
  border: 2px solid #a6a6a6;
  color: #a6a6a6;
  font-size: 14px;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.active && 'background: #1D1F22; border-color: #1D1F22; color: white;'}

  ${BigItemWrapper} & {
    width: 63px;
    height: 45px;
    font-size: 16px;
  }
`;

const textToSizeSymbols = {
  Small: 'S',
  Medium: 'M',
  Large: 'L',
  'Extra Large': 'XL'
};

class SizePicker extends React.Component {
  state = {
    uid: makeUniqueId()
  };

  render() {
    const {
      items,
      activeChoice,
      onChoice,
      unique = this.state.uid,
      layout = 'default'
    } = this.props;

    if (!items) {
      return null;
    }

    return (
      <SizeWrapper>
        <PickerLabel>Size:</PickerLabel>
        <ItemsSizeButtons>
          {items.map(({ displayValue, value }) => {
            const active = value === activeChoice;

            const uniqueName = curryDashStr('sizePicker')(unique)();
            const uniqueId = curryDashStr(uniqueName)(value)();

            return (
              <div key={value}>
                <input
                  type="radio"
                  name={uniqueName}
                  value={value}
                  id={uniqueId}
                  checked={active}
                  onChange={() => {
                    onChoice(value);
                  }}
                />
                <SizeButton htmlFor={uniqueId} active={active}>
                  {Number(displayValue)
                    ? displayValue
                    : textToSizeSymbols[displayValue]}
                </SizeButton>
              </div>
            );
          })}
        </ItemsSizeButtons>
      </SizeWrapper>
    );
  }
}

export default SizePicker;
