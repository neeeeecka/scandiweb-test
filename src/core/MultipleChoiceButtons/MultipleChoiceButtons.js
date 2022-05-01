import React from "react";
import styled from "styled-components";

const ItemSize = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  input {
    display: none;
  }
`;

const ItemsSizeButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 10px;
`;

const ItemSizeButton = styled.label`
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

  ${(props) =>
    props.active && "background: #1D1F22; border-color: #1D1F22; color: white;"}
`;

class MultipleChoiceButtons extends React.Component {
  render() {
    const { choices, ButtonComponent } = this.props;

    return (
      <ItemSize>
        <span>Size:</span>
        <ItemsSizeButtons>
          {choices.map(({ label, value }) => {
            return (
              <>
                <ItemSizeButton for={value}>{label}</ItemSizeButton>
                <input type="radio" name="size" value={value} id={value} />
              </>
            );
          })}
        </ItemsSizeButtons>
      </ItemSize>
    );
  }
}

export default MultipleChoiceButtons;
