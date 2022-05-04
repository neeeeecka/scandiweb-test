import React from "react";
import styled from "styled-components";
import makeUniqueId from "../../../utils/uniqueId";
import curryDashStr from "../../../utils/curryDashStr";
import ofLayouts from "../../../HOCs/ofLayouts";
import {
  PickerLabel,
  PickerWrapper,
  BigItemWrapper,
} from "../productTweaker.css";

const SizeWrapper = styled(PickerWrapper)`
  input {
    &:focus + label {
      outline: 2px solid var(--color-primary);
      outline-offset: -1px;
    }
  }
`;

// const SizeLabel = styled(PickerLabel)``;

const ItemsSizeButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 10px;
`;

const SizeButton = styled.label`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background: #a6a6a633;
  border: 1px solid #a6a6a6;
  color: #a6a6a6;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  user-select: none;

  ${(props) =>
    props.active && "background: #1D1F22; border-color: #1D1F22; color: white;"}

  ${BigItemWrapper} & {
    width: 63px;
    height: 45px;
    font-size: 16px;
  }
`;

class SizePicker extends React.Component {
  state = {
    uid: makeUniqueId(),
  };

  render() {
    const {
      choices,
      activeChoice,
      onChoice,
      unique = this.state.uid,
      layout = "default",
    } = this.props;

    return (
      <SizeWrapper>
        <PickerLabel>Size:</PickerLabel>
        <ItemsSizeButtons>
          {choices.map(({ label, value }) => {
            const active = value === activeChoice;
            const uniqueId = curryDashStr("sizePicker")(unique)(value)();

            return (
              <div key={value}>
                <input
                  type="radio"
                  name="size"
                  value={value}
                  id={uniqueId}
                  checked={active}
                  onChange={() => {
                    onChoice(value);
                  }}
                />
                <SizeButton htmlFor={uniqueId} active={active}>
                  {label}
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
