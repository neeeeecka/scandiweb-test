import React from "react";
import styled from "styled-components";
import ColorPicker from "../../../ColorPicker/ColorPicker";
import SizePicker from "../../../SizePicker";

const ItemWrapper = styled.div`
  display: flex;
`;
const ItemHeading = styled.div`
  h1,
  h2 {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
  }
  h2 {
    padding-top: 5px;
  }
`;
const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 7px;
`;

const DivFlex = styled.div`
  display: flex;
  flex: 1;
`;

const ItemCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  justify-content: space-between;
`;

const ItemPreview = styled.div`
  display: flex;
  flex: 1;
`;

const ItemColorButton = styled.label`
  display: flex;
  width: 16px;
  height: 16px;
  background: ${(props) => props.color};
`;

class CompactItem extends React.Component {
  render() {
    return (
      <ItemWrapper>
        <div>
          <ItemHeading>
            <h1>Apollo</h1>
            <h2>Running Short</h2>
          </ItemHeading>
          <ItemPrice>$50.00</ItemPrice>
          <SizePicker
            activeChoice={"S"}
            choices={[
              { label: "S", value: "S" },
              { label: "M", value: "M" },
            ]}
            onChoice={(choice) => {
              console.log(choice);
            }}
          />
          <ColorPicker
            activeChoice={"#1D1F22"}
            colors={["#5ECE7B", "#1D1F22", "#0F6450"]}
            onChoice={(choice) => {
              console.log(choice);
            }}
          />
        </div>
        <DivFlex>
          <ItemCounter>
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </ItemCounter>
          <ItemPreview>
            <img
              src="https://i.imgur.com/XqnXKXb.jpg"
              alt="Aplllo Running Short"
            />
          </ItemPreview>
        </DivFlex>
      </ItemWrapper>
    );
  }
}

export default CompactItem;
