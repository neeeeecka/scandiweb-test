import CustomComponent from '../../core/CustomComponent';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { PageTitleWrapper } from '../../styles/global.css';
import { fetchFromGQL } from '../../services/fetch/fetchFromGQL';
import {
  GQL_GET_CATEGORIES,
  GQL_GET_CATEGORY
} from '../../services/graphql/queries';
import { connect } from 'react-redux';
import { selectSelectedCategory } from '../Categories/categoriesSlice';
import { fetchCategoryItems, selectProducts } from './productListingSlice';

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

class ProductListing extends CustomComponent {
  // static contextType = getApolloContext();

  async componentDidMount() {
    const { fetchCategoryItems } = this.props;
    // const client = this.context.client;
    // const { data } = await fetchFromGQL(GQL_GET_CATEGORY, { title: 'clothes' });
    // console.log(data);
  }

  render() {
    const { products, selectedCategory } = this.props;

    console.log(products);

    return (
      <ProductListingSection>
        <Title>{selectedCategory.name}</Title>
        <ProductList>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.prices[0].amount}
            />
          ))}
        </ProductList>
      </ProductListingSection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCategory: selectSelectedCategory(state),
    products: selectProducts(state)
  };
};

const mapDispatchToProps = {
  fetchCategoryItems
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
