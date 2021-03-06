import React from 'react';
import styled from 'styled-components';
import curryDashStr from '../../../../utils/curryDashStr';
import makeUniqueId from '../../../../utils/uniqueId';

import { BigItemWrapper } from '../../productTweaker.css';

import {
  AttributeSetButtonWrapper,
  PickerLabel,
  PickerWrapper
} from '../attributeSet.css';

const ColorWrapper = styled(PickerWrapper)`
  input {
    &:focus + label:before {
      outline-color: black;
    }
  }
`;

const ColorButton = styled.label`
  width: 22px;
  height: 22px;
  display: flex;
  cursor: pointer;
  position: relative;

  &:before {
    transition: all 0.25s ease;

    content: '';
    display: inline-block;
    background: ${(props) => props.color};
    width: 16px;
    height: 16px;
    margin: auto;
    outline: 2px solid #d2d2d2;
    outline-offset: 2px;
    ${(props) => props.active && 'outline-color: black;'}
  }

  ${BigItemWrapper} & {
    width: 36px;
    height: 36px;
    &:before {
      width: 32px;
      height: 32px;
    }
  }
`;

class ColorPicker extends React.Component {
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
      <ColorWrapper>
        <PickerLabel>Color:</PickerLabel>
        <AttributeSetButtonWrapper>
          {items.map(({ value }) => {
            const active = value === activeChoice;

            const uniqueName = curryDashStr('colorPicker')(unique)();
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
                <ColorButton htmlFor={uniqueId} active={active} color={value} />
              </div>
            );
          })}
        </AttributeSetButtonWrapper>
      </ColorWrapper>
    );
  }
}

export default ColorPicker;
