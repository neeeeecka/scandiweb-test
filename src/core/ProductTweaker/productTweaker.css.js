import styled from "styled-components";
import { BigItemWrapper } from "./Layouts/Big/BigItem";

export const PickerWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  margin: 0;
  padding: 5px 0;

  input {
    opacity: 0;
    position: absolute;
  }

  ${BigItemWrapper} & {
    padding: 10px 0;
  }
`;

export const PickerLabel = styled.span`
  font-size: 14px;
  ${BigItemWrapper} & {
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    font-family: "Roboto";
  }
`;
