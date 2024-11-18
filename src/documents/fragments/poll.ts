import { gql } from "@apollo/client";

export const POLL_FIELDS = gql`
  fragment PollFields on Poll {
    id
    by
    time
    type
    descendants
    kids
    parts
    score
    text
    title
  }
`;
