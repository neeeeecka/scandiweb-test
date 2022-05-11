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
        category
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

export const GQL_GET_PRODUCT = gql`
  query GetProductById($id: String!) {
    product(id: $id) {
      id
      name
      brand
      inStock
      category
      prices {
        currency {
          symbol
        }
        amount
      }
      gallery
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
