import { gql } from "@apollo/client";

export const JOB_FIELDS = gql`
  fragment JobFields on Job {
    id
    by
    time
    type
    score
    text
    title
    url
  }
`;
