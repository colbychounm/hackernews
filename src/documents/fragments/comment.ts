import { gql } from "@apollo/client";

export const COMMENT_FIELDS = gql`
  fragment CommentFields on Comment {
    id
    by
    time
    type
    text
    parent
    kids
  }
`;
