import { gql } from "@apollo/client";

export const POLLOPT_FIELDS = gql`
  fragment PollOptFields on PollOpt {
    id
    by
    time
    type
    poll
    score
    text
  }
`;
