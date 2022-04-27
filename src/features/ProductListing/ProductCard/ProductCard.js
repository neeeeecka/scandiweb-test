import React from "react";
import styled from "styled-components";

const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 18px;
  margin: 30px;
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-weight: 300;
`;

const CardPrice = styled.span`
  font-weight: 500;
`;

const DetailsWrapper = styled.div`
  padding: 1px 0;
`;

class ProductCard extends React.Component {
  render() {
    return (
      <ProductCardStyle>
        <CardImage src="https://via.placeholder.com/300x300" />
        {/* <DetailsWrapper> */}
        <CardTitle>Apollo Running Short</CardTitle>
        <CardPrice>$50.00</CardPrice>
        {/* </DetailsWrapper> */}
      </ProductCardStyle>
    );
  }
}

export default ProductCard;
