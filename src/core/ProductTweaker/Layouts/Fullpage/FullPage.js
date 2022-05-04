import React from "react";
import styled from "styled-components";
import { ButtonFill } from "../../../../styles/global.css";
import ColorPicker from "../../ColorPicker";

import {
  BigItemWrapper,
  FullPageItemWrapper,
  ItemHeading,
  PickerLabel,
  PickerWrapper,
} from "../../productTweaker.css";

import SizePicker from "../../SizePicker";

const ItemMenus = styled.div`
  flex: 1;
  padding-left: 100px;
`;

const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 10px;
`;

const ItemPreview = styled.div`
  display: flex;
  width: 50%;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const AddToCartButton = styled(ButtonFill)`
  width: 292px;
`;

class FullPage extends React.Component {
  render() {
    return (
      <FullPageItemWrapper>
        <ItemPreview>
          <img
            src="https://i.imgur.com/XqnXKXb.jpg"
            alt="Aplllo Running Short"
          />
        </ItemPreview>
        <ItemMenus>
          <ItemHeading>
            <h1>Apollo</h1>
            <h2>Running Short</h2>
          </ItemHeading>
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
          <PickerWrapper>
            <PickerLabel>Price:</PickerLabel>
            <ItemPrice>$50.00</ItemPrice>
          </PickerWrapper>
          <AddToCartButton>Add to cart</AddToCartButton>
        </ItemMenus>
      </FullPageItemWrapper>
    );
  }
}

export default FullPage;
