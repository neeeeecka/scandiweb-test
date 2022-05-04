import styled from "styled-components";

export const BigItemWrapper = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 20px;

  border-bottom: 1px solid #e5e5e5;

  &:first-child {
    border-top: 1px solid #e5e5e5;
  }
`;

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
    padding-bottom: 8px;
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
