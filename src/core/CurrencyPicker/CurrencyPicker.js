import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import styled from "styled-components";
import Icon from "../../assets/icon";

const ButtonStyle = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  padding: 0 9px;
  position: relative;
`;

const ArrowDown = `
  width: 8px;
  height: 8px;
  position: relative;
  top: 9px;
  margin-left: 8px;
`;

const CurrencyDropdownStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 15px);
  left: 0;
  font-weight: inherit;
  font-size: inherit;
  background: white;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
`;

const CurrencyDropdownButton = styled.button`
  font-weight: inherit;
  font-size: inherit;
  padding-left: 20px;
  padding-right: 35px;
  padding-block: 15px;
  span:first-child {
    margin-right: 5px;
  }
  &:hover {
    background: #eeeeee;
  }
`;

class CurrenctyPicker extends React.Component {
  render() {
    const currencies = { $: "USD", "€": "EUR", "£": "GBP" };
    return (
      <ButtonStyle>
        <span>$</span>
        <Icon name={"arrow-down"} style={ArrowDown} />
        <CurrencyDropdownStyle>
          {Object.keys(currencies).map((currency) => (
            <CurrencyDropdownButton>
              <span>{currency}</span>
              <span>{currencies[currency]}</span>
            </CurrencyDropdownButton>
          ))}
        </CurrencyDropdownStyle>
      </ButtonStyle>
    );
  }
}

export default CurrenctyPicker;
