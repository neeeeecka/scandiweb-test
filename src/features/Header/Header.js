import { Component } from "react";
import styled from "styled-components";
import MiniCart from "./MiniCart";
import CurrenctyPicker from "./CurrencyPicker";
import withRouter from "../../HOCs/withRouter";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 3;
  padding: 0 80px;
  height: 80px;
`;

const StyledHeaderButton = styled.button`
  transition: all 0.25s ease;
  color: var(--color-text);
  padding: 30px 16px;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 2px solid white;
  ${(props) =>
    props.selected
      ? "border-color: var(--color-primary); color: var(--color-primary);"
      : ""}
  &:hover, &:focus {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
`;

const RightWrapper = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;

const Logo = styled.a`
  background-image: url("/assets/logo.svg");
  width: 41px;
  height: 41px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

class Header extends Component {
  goToMainPage = (e) => {
    e.preventDefault();
    this.props.navigate("/");
  };

  render() {
    return (
      <>
        <StyledHeader>
          <Logo href="/" onClick={this.goToMainPage} />
          <nav>
            <StyledHeaderButton selected={true}>women</StyledHeaderButton>
            <StyledHeaderButton>men</StyledHeaderButton>
            <StyledHeaderButton>kids</StyledHeaderButton>
          </nav>
          <RightWrapper>
            <CurrenctyPicker />
            <MiniCart />
          </RightWrapper>
        </StyledHeader>
      </>
    );
  }
}

export default withRouter(Header);
