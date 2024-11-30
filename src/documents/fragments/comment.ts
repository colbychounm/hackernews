import { graphql } from "@/gql";

export const COMMENT_FIELDS = graphql(`
  fragment CommentFields on Comment {
    text
    parent
    kids
  }
`);
