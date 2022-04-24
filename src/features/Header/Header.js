import { Component } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
`;

const StyledHeaderButton = styled.button`
  color: #5ece7b;
  padding: 30px 16px;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  ${(props) => (props.selected ? "border-color: #5ece7b;" : "")}
  &:hover {
    border-color: #5ece7b;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledHeaderButton selected={true}>women</StyledHeaderButton>
        <StyledHeaderButton>men</StyledHeaderButton>
        <StyledHeaderButton>kids</StyledHeaderButton>
      </StyledHeader>
    );
  }
}

export default Header;
