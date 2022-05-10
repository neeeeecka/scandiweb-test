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
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;
