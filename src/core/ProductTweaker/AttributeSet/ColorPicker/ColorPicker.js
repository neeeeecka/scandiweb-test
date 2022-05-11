import React from 'react';
import styled from 'styled-components';
import curryDashStr from '../../../../utils/curryDashStr';
import makeUniqueId from '../../../../utils/uniqueId';

import {
  BigItemWrapper,
  PickerLabel,
  PickerWrapper
} from '../../productTweaker.css';

const ColorWrapper = styled(PickerWrapper)`
  input {
    &:focus + label:before {
      outline-color: black;
    }
  }
`;

// const getWrapper = ofLayouts({
//   default: Wrapper,
//   big: styled(Wrapper)`
//     padding: 10px 0;
//   `,
// });
const ItemsColorButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 5px;

  ${BigItemWrapper} & {
    margin-left: -2px;
  }
`;

const ColorButton = styled.label`
  width: 22px;
  height: 22px;
  display: flex;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    background: ${(props) => props.color};
    width: 16px;
    height: 16px;
    margin: auto;
    outline: 2px solid transparent;
    outline-offset: 2px;
    ${(props) => props.active && 'outline-color: var(--color-primary);'}
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
      unique = this.state.uid,
      layout = 'default'
    } = this.props;

    if (!items) {
      return null;
    }

    return (
      <ColorWrapper>
        <PickerLabel>Color:</PickerLabel>
        <ItemsColorButtons>
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
        </ItemsColorButtons>
      </ColorWrapper>
    );
  }
}

export default ColorPicker;
