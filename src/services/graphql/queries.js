import { gql } from '@apollo/client';

export const GQL_GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

export const GQL_GET_CATEGORY = gql`
  query GetByCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        brand
        inStock
        prices {
          currency {
            symbol
          }
          amount
        }
        gallery
      }
    }
  }
`;

export const GQL_GET_PRODUCT_ADDITIONAL = gql`
  query GetProductById($id: ID!) {
    product(id: $id) {
      id
      description
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
      }
    }
  }
`;
