import React from "react";
import styled from "styled-components";
import ColorPicker from "../../ColorPicker";
import CountPicker from "../../CountPicker";
import SizePicker from "../../SizePicker";

export const BigItemWrapper = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 20px;

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
    font-weight: 600;
    font-size: 30px;
  }
  h2 {
    padding-top: 5px;
    font-weight: 400;
  }
`;
const ItemPrice = styled.h2`
  color: #1d1f22;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 15px;
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
      <BigItemWrapper>
        <ItemMenus>
          <ItemHeading>
            <h1>Apollo</h1>
            <h2>Running Short</h2>
          </ItemHeading>
          <ItemPrice>$50.00</ItemPrice>
          <SizePicker
            layout="big"
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
            layout="big"
            activeChoice={"#1D1F22"}
            colors={["#5ECE7B", "#1D1F22", "#0F6450"]}
            onChoice={(choice) => {
              console.log(choice);
            }}
          />
        </ItemMenus>
        <CountPicker
          layout="big"
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
      </BigItemWrapper>
    );
  }
}

export default BigItem;
