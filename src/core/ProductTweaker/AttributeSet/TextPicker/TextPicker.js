import React from 'react';
import styled from 'styled-components';
import makeUniqueId from '../../../../utils/uniqueId';
import curryDashStr from '../../../../utils/curryDashStr';

import { BigItemWrapper } from '../../productTweaker.css';

import {
  AttributeSetButtonWrapper,
  PickerLabel,
  PickerWrapper
} from '../attributeSet.css';

const SizeWrapper = styled(PickerWrapper)`
  input {
    &:focus + label {
      border-color: black;
    }
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

  padding: 5px;

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

    return (
      <SizeWrapper>
        <PickerLabel>{name}:</PickerLabel>
        <AttributeSetButtonWrapper>
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
        </AttributeSetButtonWrapper>
      </SizeWrapper>
    );
  }
}

export default TextPicker;
