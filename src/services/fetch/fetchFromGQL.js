import apolloInstance from '../graphql/apolloInstance';
import { GQL_GET_CATEGORIES } from '../graphql/queries';

export const fetchFromGQL = async (query, variables) => {
  return await apolloInstance.query({
    query: query,
    [variables ? 'variables' : '']: { ...variables }
  });
};
