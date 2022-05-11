import React from 'react';
import styled from 'styled-components';
import FullPage from '../../core/ProductTweaker/_Layouts/Fullpage';

const CartPageSection = styled.section`
  display: flex;
  flex-direction: column;
`;

class PDP extends React.Component {
  render() {
    const productIdFromUrl = new URLSearchParams(window.location.search).get(
      'product'
    );

    return (
      <CartPageSection>
        <FullPage id={productIdFromUrl} />
      </CartPageSection>
    );
  }
}

export default PDP;
