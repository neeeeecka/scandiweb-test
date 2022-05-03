import React from "react";
import styled from "styled-components";
import ColorPicker from "../../../ColorPicker/ColorPicker";
import CountPicker from "../../../CountPicker";
import SizePicker from "../../../SizePicker";

const ItemWrapper = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 32px;

  border-bottom: 1px solid #e5e5e5;

  &:first-child {
    border-top: 1px solid #e5e5e5;
  }
`;

const ItemMenus = styled.div`
  flex: 1;
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

const ItemPreview = styled.div`
  display: flex;
  width: 120px;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

class BigItem extends React.Component {
  render() {
    return (
      <ItemWrapper>
        <ItemMenus>
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
        </ItemMenus>
        <CountPicker
          count={0}
          onChange={(newCount) => {
            console.log(newCount);
          }}
        />
        <ItemPreview>
          <img
            src="https://i.imgur.com/XqnXKXb.jpg"
            alt="Aplllo Running Short"
          />
        </ItemPreview>
      </ItemWrapper>
    );
  }
}

export default BigItem;
