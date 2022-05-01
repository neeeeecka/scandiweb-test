import React from "react";
import styled from "styled-components";
import MultipleChoiceButtons from "../../../MultipleChoiceButtons";

const ItemWrapper = styled.div`
  display: flex;
`;
const ItemHeading = styled.p`
  margin: 0;
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
  padding: 15px 0;
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
          <MultipleChoiceButtons
            choices={[
              { label: "S", value: "S" },
              { label: "M", value: "M" },
            ]}
            component={ItemSizeButton}
            onChoice={(choice) => {
              console.log(choice);
            }}
          />
          <div>
            <span>Color:</span>
          </div>
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
