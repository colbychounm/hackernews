import { gql } from "@apollo/client";

export const POLL_FIELDS = gql`
  fragment PollFields on Poll {
    descendants
    kids
    parts
    score
    text
    title
  }
`;
