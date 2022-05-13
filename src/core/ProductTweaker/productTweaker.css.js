import styled from 'styled-components';

export const BigItemWrapper = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 20px;

  border-bottom: 1px solid #e5e5e5;

  &:first-child {
    border-top: 1px solid #e5e5e5;
  }
`;
export const FullPageItemWrapper = styled(BigItemWrapper)`
  padding: 0;
  gap: max(50px, calc(7vw));
  margin-top: 80px;
  && {
    border: 0;
  }
`;

export const ItemHeading = styled.div`
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

  ${FullPageItemWrapper} & {
    padding-bottom: 40px;
  }
`;
