import { gql } from "@apollo/client";

export const COMMENT_FIELDS = gql`
  fragment CommentFields on Comment {
    text
    parent
    kids
  }
`;

export const ITEM_FIELDS = gql`
  fragment ItemFields on Item {
    __typename
  }
`;
