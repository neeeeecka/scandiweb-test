import apolloInstance from '../graphql/apolloInstance';

export const fetchFromGQL = async (query, variables) => {
  try {
    return await apolloInstance.query({
      query: query,
      [variables ? 'variables' : '']: { ...variables },
      fetchPolicy: 'no-cache'
    });
  } catch (e) {
    console.error(e);
  }
};
