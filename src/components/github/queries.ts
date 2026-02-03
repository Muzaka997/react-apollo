import { gql } from "@apollo/client";

export const GET_VIEWER_REPOS = gql`
  query GetViewerAndRepos {
    viewer {
      login
      name
      repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          __typename
          id
          name
          description
          primaryLanguage {
            name
          }
          url
          viewerHasStarred
          stargazerCount
        }
      }
    }
  }
`;
