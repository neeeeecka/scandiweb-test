import React from "react";
import styled from "styled-components";

const ItemColor = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  margin: 0;
  padding: 5px 0;
  font-size: 14px;
  input {
    opacity: 0;
    position: absolute;
    &:focus + label:before {
      outline-color: black;
    }
  }
`;

const ItemsColorButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 10px;
`;

const ItemColorButton = styled.label`
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

class ColorPicker extends React.Component {
  render() {
    const { colors, activeChoice, onChoice } = this.props;

    return (
      <ItemColor>
        <span>Color:</span>
        <ItemsColorButtons>
          {colors.map((color) => {
            const active = color === activeChoice;
            return (
              <div key={color}>
                <input
                  type="radio"
                  name="size"
                  value={color}
                  id={color}
                  checked={active}
                  onChange={() => {
                    onChoice(color);
                  }}
                />
                <ItemColorButton
                  htmlFor={color}
                  active={active}
                  color={color}
                />
              </div>
            );
          })}
        </ItemsColorButtons>
      </ItemColor>
    );
  }
}

export default ColorPicker;
