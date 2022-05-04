import React from "react";
import styled from "styled-components";
import ofLayouts from "../../../HOCs/ofLayouts";
import curryDashStr from "../../../utils/curryDashStr";
import makeUniqueId from "../../../utils/uniqueId";
import {
  BigItemWrapper,
  PickerLabel,
  PickerWrapper,
} from "../productTweaker.css";

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
    content: "";
    display: inline-block;
    background: ${(props) => props.color};
    width: 16px;
    height: 16px;
    margin: auto;
    outline: 2px solid transparent;
    outline-offset: 2px;
    ${(props) => props.active && "outline-color: var(--color-primary);"}
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
    uid: makeUniqueId(),
  };

  render() {
    const {
      colors,
      activeChoice,
      onChoice,
      unique = this.state.uid,
      layout = "default",
    } = this.props;

    return (
      <ColorWrapper>
        <PickerLabel>Color:</PickerLabel>
        <ItemsColorButtons>
          {colors.map((color) => {
            const active = color === activeChoice;

            const uniqueName = curryDashStr("colorPicker")(unique)();
            const uniqueId = curryDashStr(uniqueName)(color)();

            return (
              <div key={color}>
                <input
                  type="radio"
                  name={uniqueName}
                  value={color}
                  id={uniqueId}
                  checked={active}
                  onChange={() => {
                    onChoice(color);
                  }}
                />
                <ColorButton htmlFor={uniqueId} active={active} color={color} />
              </div>
            );
          })}
        </ItemsColorButtons>
      </ColorWrapper>
    );
  }
}

export default ColorPicker;
