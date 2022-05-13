import styled from 'styled-components';
import { BigItemWrapper, FullPageItemWrapper } from '../productTweaker.css';

export const PickerLabel = styled.span`
  font-size: 14px;
  ${BigItemWrapper} & {
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'Roboto';
  }
`;

export const PickerWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  margin: 0;
  padding: 0;

  input {
    opacity: 0;
    position: absolute;
  }

  padding-top: 5px;
  padding-bottom: 8px;

  ${BigItemWrapper} & {
    padding-top: 0;
    padding-bottom: 20px;
  }

  ${FullPageItemWrapper} & {
    padding-bottom: 15px;
  }
`;

export const AttributeSetButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
  flex-wrap: wrap;

  padding-top: 5px;

  ${BigItemWrapper} & {
    padding-top: 10px;
    margin-left: 0;
  }
`;
