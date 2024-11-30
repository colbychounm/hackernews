import { graphql } from "@/gql";

const GET_ITEMS = graphql(`
  query Items($type: ListType!, $first: Int, $after: Int) {
    items(type: $type, first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          type
          by
          time
          ... on Comment {
            ...CommentFields
          }
          ... on Story {
            ...StoryFields
          }
          ... on Job {
            ...JobFields
          }
          ... on Poll {
            ...PollFields
          }
          ... on PollOpt {
            ...PollOptFields
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`);

export default GET_ITEMS;
