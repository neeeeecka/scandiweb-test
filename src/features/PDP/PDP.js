import React from 'react';
import styled from 'styled-components';
import FullPage from '../../core/ProductTweaker/_Layouts/Fullpage';

const CartPageSection = styled.section`
  display: flex;
  flex-direction: column;
`;

class PDP extends React.Component {
  render() {
    return (
      <CartPageSection>
        <FullPage />
      </CartPageSection>
    );
  }
}

export default PDP;
