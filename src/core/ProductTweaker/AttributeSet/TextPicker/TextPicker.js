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
      border-color: black;
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
  transition: all 0.25s ease;
  font-family: 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #a6a6a6;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  color: #282828;

  ${(props) =>
    props.active &&
    `
    background: #1D1F22; 
    border-color: #1D1F22; 
    color: white;
    
    `}

  &:hover {
    border-color: black;
  }

  ${BigItemWrapper} & {
    padding: 8px 15px;
    font-size: 16px;
  }
`;

class TextPicker extends React.Component {
  state = {
    uid: makeUniqueId()
  };

  render() {
    const {
      items,
      name,
      activeChoice,
      onChoice,
      unique = this.state.uid
    } = this.props;

    if (!items) {
      return null;
    }

    return (
      <SizeWrapper>
        <PickerLabel>{name}:</PickerLabel>
        <ItemsSizeButtons>
          {items.map(({ displayValue, value }) => {
            const active = value === activeChoice;

            const uniqueName = curryDashStr('textPicker')(unique)();
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
                  {displayValue}
                </SizeButton>
              </div>
            );
          })}
        </ItemsSizeButtons>
      </SizeWrapper>
    );
  }
}

export default TextPicker;
