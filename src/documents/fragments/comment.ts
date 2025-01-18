import { graphql } from "@/gql";

export const COMMENT_FIELDS = graphql(`
  fragment CommentFields on Comment {
    id
    type
    by
    time
    text
    parent
    kids
    comments {
      text
      parent
      kids
    }
  }
`);

export const COMMENT_FIELDS_RECURSIVE = graphql(`
  fragment CommentFieldsRecursive on Story {
    comments {
      ...CommentFields
      comments {
        ...CommentFields
        comments {
          ...CommentFields
          comments {
            ...CommentFields
            comments {
              ...CommentFields
            }
          }
        }
      }
    }
  }
`);
