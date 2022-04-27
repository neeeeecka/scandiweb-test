import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import styled from "styled-components";
import Icon from "../../assets/icon";

const ButtonStyle = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 18px;
`;

const ArrowDown = `
  width: 7px;
  height: 7px;
  position: relative;
  top: 10px;
  margin-left: 10px;
`;

class CurrenctyPicker extends React.Component {
  render() {
    return (
      <ButtonStyle>
        <span>$</span>
        <Icon name={"arrow-down"} style={ArrowDown} />
      </ButtonStyle>
    );
  }
}

export default CurrenctyPicker;
