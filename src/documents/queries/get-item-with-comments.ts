import { graphql } from "@/gql";

const GET_ITEM_WITH_COMMENTS = graphql(`
  query ItemWithComments($id: Int!) {
    item(id: $id) {
      id
      type
      by
      time
      ... on Story {
        comments {
          id
          type
          by
          time
          ...CommentFields
        }
      }
    }
  }
`);

export default GET_ITEM_WITH_COMMENTS;
