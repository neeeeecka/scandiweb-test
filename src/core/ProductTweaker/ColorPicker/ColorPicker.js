import React from "react";
import styled from "styled-components";
import ofLayouts from "../../../HOCs/ofLayouts";
import curryDashStr from "../../../utils/curryDashStr";
import makeUniqueId from "../../../utils/uniqueId";
import { PickerLabel, PickerWrapper } from "../productTweaker.css";

const Wrapper = styled(PickerWrapper)`
  &:focus + label:before {
    outline-color: black;
  }
`;

const getWrapper = ofLayouts({
  default: Wrapper,
  big: styled(Wrapper)`
    padding: 10px 0;
  `,
});
const ItemsColorButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 5px;
`;

const getColorLabel = ofLayouts({
  default: styled.span`
    font-size: 14px;
  `,
  big: styled.span`
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    font-family: "Roboto";
  `,
});

const ColorButtonStyle = styled.label`
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
`;

const getColorButton = ofLayouts({
  default: ColorButtonStyle,
  big: styled(ColorButtonStyle)`
    width: 36px;
    height: 36px;
    &:before {
      width: 32px;
      height: 32px;
    }
  `,
});

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

    const Wrapper = getWrapper(layout);
    const ColorLabel = getColorLabel(layout);
    const ColorButton = getColorButton(layout);

    return (
      <Wrapper>
        <ColorLabel>Color:</ColorLabel>
        <ItemsColorButtons>
          {colors.map((color) => {
            const active = color === activeChoice;
            const uniqueId = curryDashStr("colorPicker")(unique)(color)();

            return (
              <div key={color}>
                <input
                  type="radio"
                  name="size"
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
      </Wrapper>
    );
  }
}

export default ColorPicker;
