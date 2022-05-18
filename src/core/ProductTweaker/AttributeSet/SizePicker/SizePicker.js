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
      outline: 2px solid black;
      outline-offset: 2px;
    }
  }
`;

const SizeButton = styled.label`
  transition: all 0.25s ease;

  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 2px solid #a6a6a6;
  font-size: 14px;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.active && 'background: #1D1F22; border-color: #1D1F22; color: white;'}

  &:hover {
    border-color: black;
  }

  ${BigItemWrapper} & {
    width: 50px;
    height: 45px;
    font-size: 16px;
  }
`;

class SizePicker extends React.Component {
  state = {
    uid: makeUniqueId()
  };

  render() {
    const {
      items,
      activeChoice,
      onChoice,
      unique = this.state.uid
    } = this.props;

    return (
      <SizeWrapper>
        <PickerLabel>Size:</PickerLabel>
        <AttributeSetButtonWrapper>
          {items.map(({ displayValue, id, value }) => {
            const active =
              value === activeChoice || displayValue === activeChoice;

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
                  {Number(displayValue) ? displayValue : value}
                </SizeButton>
              </div>
            );
          })}
        </AttributeSetButtonWrapper>
      </SizeWrapper>
    );
  }
}

export default SizePicker;
