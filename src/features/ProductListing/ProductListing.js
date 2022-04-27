import CustomComponent from "../../core/CustomComponent";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductListingSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  padding: 50px 0;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grind-template-rows: auto;
`;

class ProductListing extends CustomComponent {
  render() {
    const data = [1, 2, 3, 4, 5, 6];

    return (
      <ProductListingSection>
        <Title>Category name</Title>
        <ProductList>
          {data.map((item) => (
            <ProductCard key={item} />
          ))}
        </ProductList>
      </ProductListingSection>
    );
  }
}

export default ProductListing;
