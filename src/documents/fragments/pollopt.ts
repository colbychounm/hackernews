import { gql } from "@apollo/client";

export const POLLOPT_FIELDS = gql`
  fragment PollOptFields on PollOpt {
    poll
    score
    text
  }
`;
