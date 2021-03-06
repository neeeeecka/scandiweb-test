import styled from 'styled-components';
import ProductCard from './ProductCard';

import { connect } from 'react-redux';
import { selectSelectedCategory } from '../Categories/categoriesSlice';
import { fetchCategoryItems, selectAllProducts } from './productListingSlice';
import React from 'react';

const ProductListingSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 42px;
  padding: 80px 0;
  margin: 0;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grind-template-rows: auto;
  gap: max(5px, 3.5vw);
`;

class ProductListing extends React.Component {
  // static contextType = getApolloContext();

  async componentDidMount() {
    const { selectedCategory, fetchCategoryItems } = this.props;
    fetchCategoryItems(selectedCategory.name);
  }

  componentDidUpdate(prevProps) {
    const { selectedCategory, fetchCategoryItems } = this.props;

    if (selectedCategory.name !== prevProps.selectedCategory.name) {
      fetchCategoryItems(selectedCategory.name);
    }
  }

  render() {
    const { selectedCategory, products } = this.props;

    return (
      <ProductListingSection>
        <Title>{selectedCategory.name}</Title>
        <ProductList>
          {products
            .filter(
              (product) =>
                selectedCategory.name === 'all' ||
                product.category === selectedCategory.name
            )
            .map((product) => (
              <ProductCard key={product.id} id={product.id} />
            ))}
        </ProductList>
      </ProductListingSection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCategory: selectSelectedCategory(state),
    products: selectAllProducts(state)
  };
};

const mapDispatchToProps = {
  fetchCategoryItems
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
